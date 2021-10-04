const express = require('express');

const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController');


/* Páginas de productos */
router.post("/:id", apiProductsController.detail);
router.post("/", apiProductsController.productsAll);

module.exports = router;