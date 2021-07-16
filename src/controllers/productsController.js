const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const productsController = {

    /* GET - dellate de un producto en particular */
    detalle: (req, res) => {
        const id = req.params.id;
        const detalle = productos.find((prod) => prod.id === id);
        const viewData = {
            producto: detalle,
        };
        res.render('products/productDetail', viewData);
    },

    /* GET - listado de productos */
    listar: (req, res) => {
        const viewData = {
            producto: productos,
        };
        res.render('products/adminProduct', viewData);
    },

    /* GET - formulario de creación de productos */
    crear: (req, res) => res.render('products/createProduct'),

    /* GET - formulario de edición de productos */
    editar: (req, res) => {
        const id = req.params.id;
        const detalle = productos.find((prod) => prod.id === id);
        const productoEditar = {
            producto: detalle,
        };
        res.render('products/editProduct', productoEditar);
    },

    /* PUT - Acción de edición a donde se envia el formulario */
    actualizar: (req, res) => {
        req.body.id = req.params.id;
        const productosActualizar = productos.map((prod) => {
            if (prod.id === req.body.id) {
                return (prod = req.body);
            }
            return prod;
        });
        const productoActualizar = JSON.stringify(productosActualizar, null, 2);
        fs.writeFileSync(productosFilePath, productoActualizar);
        res.redirect('products/adminProduct');
    },

    /* DELETE - Acción de borrado - EN PROCESO - */
    eliminar: (req, res) => {
        const productoEliminarId = req.params.id;
        const productosFinal = productos.filter(
            (prod) => prod.id !== productoEliminarId
        );
        fs.writeFileSync(
            productosFilePath,
            JSON.stringify(productosFinal, null, 2)
        );
        const productosActualizados = {
            producto: productosFinal,
        };
        res.redirect('products/adminProduct', productosActualizados);
    },
};

module.exports = productsController;