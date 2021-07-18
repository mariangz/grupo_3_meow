const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/registro', mainController.registro);
router.get('/carrito', mainController.carrito);
router.get('/error', mainController.error);

module.exports = router;
