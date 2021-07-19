const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/users/login', mainController.login);
router.get('/users/registro', mainController.registro);
router.get('/carrito', mainController.carrito);
router.get('/error', mainController.error);

module.exports = router;
