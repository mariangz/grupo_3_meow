const fs = require('fs');
const path = require('path');
const productosFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const productsController = {
    detalle: (req, res) => {
        const id = req.params.id
        const detalle = productos.find((e) => e.id == id)
        const viewData = {
            producto: detalle
        }

        res.render('products/productDetail', viewData);
    },

    atun: (req, res) => res.render('products/atun'),

    carne: (req, res) => res.render('products/carne'),

    pollo: (req, res) => res.render('products/pollo'),

    pescado: (req, res) => res.render('products/pescado'),

    salmon: (req, res) => res.render('products/salmon'),

    vegetariano: (req, res) => res.render('products/vegetariano'),

    crear: (req, res) => res.render('products/createProduct'),

    editar: (req, res) => res.render('products/editProduct'),

};

module.exports = productsController;