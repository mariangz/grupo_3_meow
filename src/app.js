const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const methodOverride = require('method-override');

const app = express();

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

// Routers
const mainRouter = require('./routers/mainRouter');
const productsRouter = require('./routers/productsRouter');
const usersRouter = require('./routers/usersRouter');

app.use(session({ secret: "Shh, it's a secret", resave: false, saveUninitialized: false }));
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.urlencoded({ extended: false }));

// Template engine
app.set('view engine', 'ejs');

app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('../public'));
// eslint-disable-next-line no-console
app.listen(3000, () => console.log('servidor en puerto 3000'));

app.use('/', mainRouter);
app.use('/productos', productsRouter);
app.use('/users', usersRouter);
// app.use((req, res) => res.status(404).render('404'));