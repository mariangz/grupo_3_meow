const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/crear-productos', productsController.crear);
router.get('/editar-productos', productsController.editar);
router.get('/:id/', productsController.detalle);

module.exports = router;