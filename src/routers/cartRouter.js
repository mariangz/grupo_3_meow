const express = require('express');

const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const addCartValidator = require('../middlewares/addCartValidator');

const cartController = require('../controllers/cartController');

router.post('/cart/addCart', authMiddleware, addCartValidator.addCart, cartController.addCart);
router.get('/cart', authMiddleware, cartController.cart);
router.post('/cart/delete', authMiddleware, cartController.deleteCart);

module.exports = router;