// const fs = require('fs');
// const path = require('path');
const db = require('../database/models');
// const productsFilePath = path.join(__dirname, '../data/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    index: async(req, res) => {
        db.Product.findAll()
            .then(product => {
                res.render('home', { product })
            })
            .cath(
                (error) => res.send(error)
            )
            // CODIGO PARA JSON
            // const viewData = {
            //        product: products,
            //      };
            //      res.render('home', viewData);
    },

    cart: (req, res) => res.render('cart'),
};

module.exports = mainController;