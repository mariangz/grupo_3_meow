const express = require('express');

const router = express.Router();

// Controller
const { body } = require('express-validator');
const usersController = require('../controllers/usersController');

// Middlewares
const upload = require('../middlewares/uploadUserMiddleware');

// localhost:3000/users/registro
router.get('/users/registro', usersController.registrar);

router.post('/users/registro',

    body('email').isEmail().withMessage('Debe ser un email válido'),
    body('password').isLength({ min: 6 }).withMessage('Debe tener al menos 6 caracteres'),
    body('name').isString().isLength({ min: 2 }).withMessage('Debe tener al menos 2 caracteres'),

    usersController.guardarRegistro);

router.get('/users/login', usersController.ingresar);
router.post('/users/login', usersController.guardarLogin);
router.post('/users/registro', upload.single('image'), usersController.guardarRegistro);

module.exports = router;