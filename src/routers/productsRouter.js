const express = require('express');

const router = express.Router();

// Middlewares
const upload = require('../middlewares/uploadProductMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Controller
const productsController = require('../controllers/productsController');

router.get('/adminProduct', authMiddleware, productsController.list); /* GET - listado de productos para administrar */
router.get('/:id/', productsController.detail); /* GET - dellate de un producto en particular */
router.get('/createProduct', authMiddleware, productsController.create); /* GET - formulario de creación de productos */
router.post('/createProduct', upload.single('image'), productsController.save); /* POST - Acción de edición a donde se envia el formulario */
router.get('/editProduct/:id', productsController.edit); /* GET - formulario de edición de productos */
router.put('/editProduct/:id', productsController.update); /* PUT - Acción de edición a donde se envia el formulario */
router.delete('/:id', productsController.delete); /* DELETE un producto */

module.exports = router;