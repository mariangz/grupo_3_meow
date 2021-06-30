const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/atun', productsController.atun);
router.get('/carne', productsController.carne);
router.get('/pescado', productsController.pescado);
router.get('/salmon', productsController.salmon);
router.get('/vegetariano', productsController.vegetariano);
router.get('/pollo', productsController.pollo);

module.exports = router;