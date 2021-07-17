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
        const product = productos.find((prod) => prod.id === id);
        const viewData = {
            producto: product
        }
        return res.render('products/editProduct', viewData)
    },

    /* PUT - Acción de edición a donde se envia el formulario */
    actualizar: (req, res) => {
        const idProduct = productos.findIndex(producto => producto.id == req.params.id)
        productos[idProduct] = {...productos[idProduct], ...req.body };
        fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, 2))
        res.redirect(303, '/');
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