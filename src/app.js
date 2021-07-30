const express = require('express');

const app = express();
const methodOverride = require('method-override');
const mainRouter = require('./routers/mainRouter');
const productsRouter = require('./routers/productsRouter');
const usersRouter = require('./routers/usersRouter');

app.use(express.static('../public'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use('/', mainRouter);
app.use('/productos', productsRouter);
app.use('/users', usersRouter);
//app.use((req, res) => res.status(404).render('404'));

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('servidor en puerto 3000'));