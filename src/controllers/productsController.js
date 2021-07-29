const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const productsController = {
  /* GET - detalle de un producto en particular */
  detalle: (req, res) => {
    const { id } = req.params;
    const detalle = productos.find((prod) => prod.id === id);
    const viewData = { producto: detalle };
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

  /* POST - Acción de creación a donde se envia el formulario */
  guardar: (req, res) => {
    // Obtengo los datos ingresados en el formulario del producto a crear
    const productoACrear = req.body;
    const imagenASubir = req.file;
    // Organizo objeto con la misma estrucuta que el JSON de productos
    const productoNuevo = {
      id: productoACrear.id,
      name: productoACrear.name,
      description: productoACrear.description,
      nutritional: productoACrear.nutritional,
      category: productoACrear.category,
      price: productoACrear.price,
      image: imagenASubir.filename,
    };
    // Guardo el nuevo producto en la base de datos
    productos.push(productoNuevo);
    fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, 2));
    res.redirect('/');
  },

  /* GET - formulario de edición de productos */
  editar: (req, res) => {
    const edades = ['Cachorro', 'Adulto', 'Senior'];
    const { id } = req.params;
    const product = productos.find((prod) => prod.id === id);
    const viewData = {
      producto: product,
      edades,
    };
    return res.render('products/editProduct', viewData);
  },

  /* PUT - Acción de edición a donde se envia el formulario */
  actualizar: (req, res) => {
    const indiceProduct = productos.findIndex(
      (producto) => producto.id === req.params.id,
    );
    productos[indiceProduct] = {
      ...productos[indiceProduct],
      ...req.body,
      ...req.file,
    };
    fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, 2));
    res.redirect('/');
  },

  /* DELETE - Acción de borrado - EN PROCESO - */
  eliminar: (req, res) => {
    // Buscar el producto con el id recibido por parametro en el array
    const productosFinal = productos.filter(
      (prod) => prod.id !== req.params.id,
    );
    fs.writeFileSync(
      productosFilePath,
      JSON.stringify(productosFinal, null, 2),
    );
    res.redirect('/');
  },
};

module.exports = productsController;
