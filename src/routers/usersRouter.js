const express = require('express');

const router = express.Router();

// Controller
const usersController = require('../controllers/usersController');

// Middlewares
const upload = require('../middlewares/uploadUserMiddleware');
const validations = require('../middlewares/registerValidationMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Formulario de REGISTRO
router.get('/register', guestMiddleware, usersController.register);

// Proceso de REGISTRO
router.post('/register', upload.single('image'), validations, usersController.processRegister);

// Formulario de LOGIN
router.get('/login', guestMiddleware, usersController.login);

// Proceso de LOGIN
router.post('/login', usersController.loginProcess);

// Perfil USUARIO
router.get('/profile', authMiddleware, usersController.profile);

// Logout USUARIO
router.get('/logout', usersController.logout);

module.exports = router;