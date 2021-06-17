// express
const express = require('express');
const app = express();
const path = require('path');

// static files
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

// servidor
app.listen(3000, (req, res) => {
  console.log('servidor corriendo en el puerto 3000');
});

// template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// renderizar templates
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/productCart', (req, res) => {
  res.render('productCart');
});

app.get('/productDetail', (req, res) => {
  res.render('productDetail');
});
