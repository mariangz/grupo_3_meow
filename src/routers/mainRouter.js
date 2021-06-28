const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/login', mainController.index);
router.get('/registro', mainController.registro);
router.get('/carrito', mainController.login);

module.exports = router;
