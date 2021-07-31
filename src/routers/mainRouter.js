const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/users/login', mainController.login);
router.get('/users/register', mainController.register);
router.get('/carrito', mainController.carrito);

module.exports = router;
