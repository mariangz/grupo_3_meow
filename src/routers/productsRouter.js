const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '/public/images/food');
    },
    filename: function(req, file, cb) {
        const imageProduct = file.originalname
        cb(null, imageProduct);
    }
});

router.get('/crear-productos', productsController.crear);
router.get('/:id/editar-productos', productsController.editar); /* GET - formulario de edición de productos */
router.get('/:id/', productsController.detalle); /* GET - dellate de un producto en particular */

module.exports = router;