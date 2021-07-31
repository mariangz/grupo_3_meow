const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const mainController = {
    index: (req, res) => {
        const viewData = {
            producto: productos,
        };
        res.render('home', viewData);
    },

    login: (req, res) => res.render('users/login'),

    register: (req, res) => res.render('users/register'),

    cart: (req, res) => res.render('cart'),
};

module.exports = mainController;