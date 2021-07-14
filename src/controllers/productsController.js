const fs = require('fs');
const path = require('path');
const productosFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const productsController = {
    /* GET - dellate de un producto en particular */
    detalle: (req, res) => {
        const id = req.params.id
        const detalle = productos.find((e) => e.id == id)
        const viewData = {
            producto: detalle
        }
        res.render('products/productDetail', viewData);
    },

    crear: (req, res) => res.render('products/createProduct'),

    editar: (req, res) => {
        const id = req.params.id
        const detalle = productos.find((e) => e.id == id)
        const viewData = {
            producto: detalle
        }
        res.render('products/editProduct', viewData);
    },
};

module.exports = productsController;