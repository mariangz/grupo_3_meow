const express = require('express');

const router = express.Router();


// Controller
const { body } = require('express-validator');
const usersController = require('../controllers/usersController');

// Middlewares
const upload = require('../middlewares/uploadUserMiddleware');
const validations = require('../middlewares/registerValidationMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');



// Formulario de REGISTRO
router.get('/register', guestMiddleware, usersController.register);

// Procesar el REGISTRO
router.post('/register', upload.single('image'), validations, usersController.processRegister);

// Formulario de LOGIN
router.get('/login', guestMiddleware, usersController.login);

// Proceso de LOGIN
router.post('/login', usersController.loginProcess);

// Perfil de Usuario
router.get('/profile', authMiddleware, usersController.profile);

// Logout
router.get('/logout', usersController.logout);

module.exports = router;