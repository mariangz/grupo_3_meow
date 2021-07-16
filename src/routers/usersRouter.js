const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const { body } = require('express-validator');

// localhost:3000/users/registro
router.get('/registro', usersController.registrar);
router.post('/registro',

    body('email').isEmail().withMessage('Debe ser un email válido'),
    body('password').isLength({ min: 6 }).withMessage('Debe tener al menos 6 caracteres'),
    body('name').isString().isLength({ min: 2 }).withMessage('Debe tener al menos 2 caracteres'),

    usersController.guardarRegistro);

router.get('/login', usersController.ingresar);
router.post('/login', usersController.guardarLogin);

module.exports = router;
