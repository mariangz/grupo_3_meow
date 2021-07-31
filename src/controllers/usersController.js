const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcrypt');

const saltRounds = 10;
const { validationResult } = require('express-validator');
const User = require('../models/Users');

const usersController = {
    /* GET - formulario de creación de usuarios */
    register: (req, res) => {
        return res.render('/register');
    },
    /* Procesar registro */
    processRegister: (req, res) => {
        return res.send({
            body: req.body,
            file: req.file
        });
    },
    /* POST - petición de guardar registro de usuario */
    saveRegister: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('../users/register', { errors: errors.array() });
            // return res.status(400).json({ errors: errors.array() });
        }
        // Obtengo los datos ingresados en el formulario del usuario a crear//
        const userToCreate = req.body;
        const imageToCreate = req.file;
        // Organizo objeto con la misma estructura que el JSON de usuarios
        const newUser = {
            id: userToCreate.id,
            name: userToCreate.name,
            email: userToCreate.email,
            password: userToCreate.password,
            image: userToCreate.filename,
        };
        // Encripto la contraseña del usuario//
        userToCreate.password = bcrypt.hashSync(req.body.password, saltRounds);
        // Guardo el nuevo usuario en la base de datos//
        users.push(userToCreate);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        return res.send(userToCreate);
    },

    // Formulario de LOGIN
    login: (req, res) => res.render('/login'),

    // Proceso de LOGIN
    loginProcess: (req, res) => {
        const userToLogin = User.findByField('email', req.body.email);
        if (userToLogin) {
            let isOkPassword = bcrypt.compareSync(req.body.password, userToLogin.password);
            if (isOkPassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                if (req.body.rememberUser) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
                }
                return res.redirect('profile')
            }
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            });
        }
        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'El mail no se encuentra registrado'
                }
            }
        });
    },

    // Perfil de Usuario
    profile: (req, res) => {
        console.log(req.cookies.userEmail);
        res.render('users/profile', {
            user: req.session.userLogged,
        });
    },

    // Logout
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
};
module.exports = usersController;