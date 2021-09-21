const path = require('path');
const { body } = require('express-validator');

// validación
const validationCreate = [
    body('name').notEmpty().withMessage('Ingresá un nombre')
    .isLength({ min: 5 }).withMessage('El nombre debe contener al menos 5 caracteres'),
    body('price').notEmpty().withMessage('Ingresá un precio para el producto'),
    body('description').notEmpty().withMessage('Ingresá una descripción')
    .isLength({ min: 20 }).withMessage('La descripción debe contener al menos 20 caracteres'),
    body('nutritional').notEmpty().withMessage('Ingresá una información nutricional')
    .isLength({ min: 50 }).withMessage('La descripción nutricional debe contener al menos 50 caracteres'),
    body('category').notEmpty().withMessage('Ingresá una categoria'),
    body('image').custom((value, { req }) => {
        const { file } = req;
        const acceptedExtensions = ['.jpg', '.JPG', '.jpeg', '.JPEG', '.png', '.PNG', '.gif', '.GIF'];
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
        return true
    })

];

module.exports = validationCreate;