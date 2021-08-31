const path = require('path');
const { body } = require('express-validator');

// validación
const validations = [
  body('name').notEmpty().withMessage('Ingresá tu nombre'),
  body('email')
    .notEmpty()
    .withMessage('Ingresá tu correo electrónico')
    .bail()
    .isEmail()
    .withMessage('Ingresá un formato válido'),
  body('password').notEmpty().withMessage('Ingresá tu contraseña'),
  body('confirmPassword').notEmpty().withMessage('Confirmá tu contraseña'),

  body('image').custom((value, { req }) => {
    const { file } = req;
    const acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

    if (!file) {
      throw new Error('Tienes que subir una imagen');
    } else {
      const fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ','
          )}`
        );
      }
    }
    return true;
  }),
];

module.exports = validations;
