const { validationResult } = require('express-validator');
const db = require('../database/models');

const cartController = {
    cart: (req, res) => {
        db.Item.findAll({
                where: {
                    state: 1,
                    user_id: req.session.userLogged.user_id
                },
                include: {
                    all: true,
                    nested: true
                }
            })
            .then((items) => {
                const total = items.reduce((total, item) => (total = total + Number(item.subtotal)), 0)

                res.render('cart/cart', { cartProduct: items, total });
            })

    },

    addCart: (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {

            db.Product.findByPk(req.body.product_id)
                .then((products) =>

                    // Crear mi items

                    db.Item.create({
                        price: req.body.price,
                        quantity: req.body.quantity,
                        subtotal: req.body.quantity * req.body.price,
                        state: 1,
                        user_id: req.session.userLogged.user_id,
                        product_id: products.product_id,
                        cart_id: null

                    })
                    .then(item => res.redirect('/cart'))
                    .catch(error => console.log(error))
                )
        } else {
            db.Product.findByPk(req.body.product_id)
                .then(product => {
                    res.render('/cart', { product, errors: errors.mapped() });
                })
        }
    },

    deleteCart: (req, res) => {
        db.Item.destroy({
                where: {
                    product_id: req.body.item_id,
                    user_id: req.session.userLogged.user_id
                }
            })
            .then(() => res.redirect('/cart'))
            .catch(error => console.log(error))
    },
};

module.exports = cartController;