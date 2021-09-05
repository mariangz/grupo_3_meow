// const fs = require('fs');
// const path = require('path');
const db = require('../database/models');
// const productsFilePath = path.join(__dirname, '../data/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {

    /* GET - detalle de un producto en particular MYSQL */
    detail: async(req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                res.render('products/productDetail', { product });
            })
            .cath(
                (error) => res.send(error)
            )

        /* GET - detalle de un producto en particular JSON */
        /* detail: (req, res) => {
          const { id } = req.params;
          const detalle = products.find((prod) => prod.id === id);
          const viewData = { product: detalle };
          res.render('products/productDetail', viewData); */
    },
    /* GET - listado de productos MYSQL */
    list: async(req, res) => {
        db.Product.findAll()
            .then(products => {
                res.render('products/adminProduct', { products })
            })

        /* GET - listado de productos JSON */
        /* list: (req, res) => {
            const viewData = {
                product: products,
            };
            res.render('products/adminProduct', viewData); */
    },

    /* GET - formulario de creación de productos JSON y MYSQL */
    create: (req, res) => res.render('products/createProduct'),

    /* POST - Acción de creación a donde se envia el formulario MYSQL */
    save: (req, res) => {
        const data = req.body;
        data.productName = req.body.name;
        data.productPrice = req.body.price;
        data.shortDescription = req.body.description;
        data.nutritionalDetail = req.body.nutritional;
        data.productCategory = req.body.category;
        data.productImage = req.file ? req.file.filename : ''

        db.Product
            .create(data)
            .then(product => {
                res.redirect('/');
            })

    },
    /* POST - Acción de creación a donde se envia el formulario JSON */
    /* save: (req, res) => {
        // Obtengo los datos ingresados en el formulario del producto a crear
        const productCreate = req.body;
        const imageUpLoad = req.file;
        // Organizo objeto con la misma estrucuta que el JSON de productos
        const productNew = {
            id: productCreate.id,
            name: productCreate.name,
            description: productCreate.description,
            nutritional: productCreate.nutritional,
            category: productCreate.category,
            price: productCreate.price,
            image: imageUpLoad.filename,
        };
        // Guardo el nuevo producto en la base de datos
        products.push(productNew);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/');
    }, */

    /* GET - formulario de edición de productos JSON */
    edit: (req, res) => {
        const ages = ['Cachorro', 'Adulto', 'Senior'];
        const { id } = req.params;
        const product1 = products.find((prod) => prod.id === id);
        const viewData = {
            product: product1,
            ages,
        };
        return res.render('products/editProduct', viewData);
    },

    /* PUT - Acción de edición a donde se envia el formulario */
    update: (req, res) => {
        const indexProduct = products.findIndex(
            (product) => product.id === req.params.id,
        );
        products[indexProduct] = {
            ...products[indexProduct],
            ...req.body,
            ...req.file,
        };
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/');
    },

    /* DELETE - Acción de borrado - EN PROCESO - */
    delete: (req, res) => {
        // Buscar el producto con el id recibido por parametro en el array
        const productsFinal = products.filter((prod) => prod.id !== req.params.id);
        fs.writeFileSync(productsFilePath, JSON.stringify(productsFinal, null, 2));
        res.redirect('/');
    },
};

module.exports = productsController;