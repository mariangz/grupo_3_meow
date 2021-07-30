const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcrypt');

const saltRounds = 10;
const { validationResult } = require('express-validator');

const usersController = {
    /* GET - formulario de creación de usuarios */
    registrar: (req, res) => res.render('../users/registro'),
    /* POST - petición de guardar registro de usuario */
    guardarRegistro: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('../users/registro', { errors: errors.array() });
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
    login: (req, res) => res.render('../users/login'),

    // Proceso de LOGIN
    loginProcess: (req, res) => {
        // Buscar en users.json
        // Un usuario cuyo mail sea igual al req.body.email
        //const userToLogin = users.find((user) => user.email == req.body.email);
        //if (!userToLogin) {
        //    return res.send('Error');
        //}
        // Comparar la contraseña del usuario de la base con la enviada en la petición
        //const comparacion = bcrypt.compareSync(req.body.password, userToLogin.password);
        //if (comparacion) {
        //    req.session.user = userToLogin;
        //    return res.send(req.session);
        //}
        return res.send(req.body);
        // recibir datos del usuario a loguear
    },
};
module.exports = usersController;