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

    listar: (req, res) => {
        const viewData = {
            producto: productos
        }
        res.render('products/adminProduct', viewData);
    },

    crear: (req, res) => res.render('products/createProduct'),

    editar: (req, res) => {
        const id = req.params.id;
        const detalle = productos.find((e) => e.id == id)
        const productoEditar = {
            producto: detalle
        }
        res.render('products/editProduct', productoEditar);
    },

    actualizar: (req, res) => {
        req.body.id = req.params.id;
        const productosActualizar = productos.map(prod => {
            if (prod.id == req.body.id) {
                return prod = req.body;
            }
            return prod;
        })
        const productoActualizar = JSON.stringify(productosActualizar, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), productoActualizar)
        res.redirect("/");
    },
};



module.exports = productsController;