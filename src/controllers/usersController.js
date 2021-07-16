const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { validationResult } = require('express-validator');

const usersController = {
    registrar: (req, res) => res.render('registro'),
    guardarRegistro: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('registro', { errors: errors.array() });
           // return res.status(400).json({ errors: errors.array() });
        }
        const userToCreate = req.body;
        userToCreate.id = 5;
        userToCreate.password = bcrypt.hashSync(req.body.password, saltRounds);
        users.push(userToCreate);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
        return res.send(userToCreate);
    },
    ingresar: (req, res) => res.render('login'),
    guardarLogin: (req, res) => {
        // Buscar en users.json
        // Un usuario cuyo mail sea igual al req.body.email
        const userToLogin = users.find((user) => user.email == req.body.email);
        if (!userToLogin) {
            return res.send('Error');
        }
        // Comparar la contraseña del usuario de la base con la enviada en la petición
        const comparacion = bcrypt.compareSync(req.body.password, userToLogin.password);
        if (comparacion) {
            req.session.user = userToLogin;
            return res.send(req.session);
        }
        return res.send(req.body);
        // recibir datos del usuario a loguear
    }
};
module.exports = usersController;