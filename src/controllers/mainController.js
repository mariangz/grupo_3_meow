const db = require('../database/models');

const mainController = {
    index: async(req, res) => {
        db.Product.findAll()
            .then(product => {
                res.render('home', { product })
            })
            .catch(error => res.send(error));
    },

    cart: (req, res) => res.render('cart'),
    aboutUs: (req, res) => res.render('aboutUs'),
};

module.exports = mainController;