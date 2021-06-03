// express
const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

// templates
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// servidor
app.listen(3000, (req, res) => {
  console.log('servidor corriendo en el puerto 3000');
});

// renderizar templates
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/registro', (req, res) => {
  res.render('register');
});

app.get('/producto', (req, res) => {
  res.render('product');
});

