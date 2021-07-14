const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/crear-productos', productsController.crear);
router.get('/:id/editar-productos', productsController.editar); /* GET - formulario de edición de productos */
router.get('/:id/', productsController.detalle); /* GET - dellate de un producto en particular */

module.exports = router;