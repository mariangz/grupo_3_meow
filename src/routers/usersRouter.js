const express = require('express');

const router = express.Router();

// Controller
const usersController = require('../controllers/usersController');

// Middlewares
const upload = require('../middlewares/uploadUserMiddleware');
const validations = require('../middlewares/registerValidationMiddleware');
const validationsLogin = require('../middlewares/loginValidationMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/register', guestMiddleware, usersController.register); // Formulario de REGISTRO
router.post('/register', upload.single('image'), validations, usersController.processRegister);

// Proceso de REGISTRO
router.get('/login', guestMiddleware, usersController.login); // Formulario de LOGIN
router.post('/login', validationsLogin, usersController.loginProcess); // Proceso de LOGIN
router.get('/profile', authMiddleware, usersController.profile); // Perfil USUARIO
router.get('/logout', usersController.logout); // Logout USUARIO

module.exports = router;
