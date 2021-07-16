const express = require('express');
const app = express();

const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const expressSession = require('express-session');

app.use(expressSession({secret: 'secreta'}));
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE


const mainRouter = require('./routers/mainRouter');
const productsRouter = require('./routers/productsRouter');
const usersRouter= require('./routers/usersRouter');

app.use(express.static('../public'));

app.set('view engine', 'ejs');

app.use('/', mainRouter);
app.use('/productos', productsRouter);
app.use ('/usuarios', usersRouter);

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('servidor en puerto 3000'));


module.exports = app;
