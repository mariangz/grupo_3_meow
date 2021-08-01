const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

//validación
const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('email')
        .notEmpty().withMessage('Debes ingresar un correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('confirmPassword').notEmpty().withMessage('Debes confirmar la contraseña anterior'),
    body ('image').custom ((value, { req }) => {
        let file= req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(' , ')}`);
            }
        }
        return true;
    })
];

module.exports = validations