const express = require('express');

const router = express.Router();

// Middlewares
const upload = require('../middlewares/uploadProductMiddleware');

// Controller
const productsController = require('../controllers/productsController');

router.get('/administrar', productsController.listar); /* GET - listado de productos para administrar */
router.get('/crear-productos', productsController.crear); /* GET - formulario de creación de productos */
router.post('/crear-productos', upload.single('image'), productsController.guardar); /* POST - Acción de edición a donde se envia el formulario */
router.get('/editar-productos/:id', productsController.editar); /* GET - formulario de edición de productos */
router.put('/editar-productos/:id', productsController.actualizar); /* PUT - Acción de edición a donde se envia el formulario */
router.delete('/:id', productsController.eliminar); /* DELETE un producto */
router.get('/:id/', productsController.detalle); /* GET - dellate de un producto en particular */

module.exports = router;