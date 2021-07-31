const express = require('express');

const router = express.Router();

// Controller
const { body } = require('express-validator');
const usersController = require('../controllers/usersController');

// Middlewares
const upload = require('../middlewares/uploadUserMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Formulario de REGISTRO
router.get('/users/registro', guestMiddleware, usersController.registrar);

router.post('/users/registro',

    body('email').isEmail().withMessage('Debe ser un email válido'),
    body('password').isLength({ min: 6 }).withMessage('Debe tener al menos 6 caracteres'),
    body('name').isString().isLength({ min: 2 }).withMessage('Debe tener al menos 2 caracteres'),

    usersController.guardarRegistro);
router.post('/users/registro', upload.single('image'), usersController.guardarRegistro);

// Formulario de LOGIN
router.get('/login', guestMiddleware, usersController.login);

// Proceso de LOGIN
router.post('/login', usersController.loginProcess);

// Perfil de Usuario
router.get('/profile', authMiddleware, usersController.profile);

// Logout
router.get('/logout', usersController.logout);

module.exports = router;