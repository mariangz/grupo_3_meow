const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

/* Indicamos para subir el archivo nombre y donde guardarlo */
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images/food');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

const productsController = require('../controllers/productsController');

router.get('/administrar', productsController.listar); /* GET - listado de productos para administrar */
router.get('/crear-productos', productsController.crear); /* GET - formulario de creación de productos */
router.get('/editar-productos/:id', productsController.editar); /* GET - formulario de edición de productos */
router.put('/editar-productos/:id', upload.single('imageNew'), productsController.actualizar); /* PUT - Acción de edición a donde se envia el formulario */
router.delete('/editar-productos/:id', productsController.eliminar); /* DELETE un producto */
router.get('/:id/', productsController.detalle); /* GET - dellate de un producto en particular */

module.exports = router;