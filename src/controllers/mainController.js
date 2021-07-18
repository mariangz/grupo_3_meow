const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const mainController = {
  index: (req, res) => {
    const viewData = {
      producto: productos,
    };
    res.render('home', viewData);
  },

  login: (req, res) => res.render('login'),

  registro: (req, res) => res.render('registro'),

  carrito: (req, res) => res.render('carrito'),

  error: (req, res) => res.render('404'),
};

module.exports = mainController;
