const express = require('express');

const app = express();
const mainRouter = require('./routers/mainRouter');
const productsRouter = require('./routers/productsRouter');

app.use(express.static('../public'));

app.set('view engine', 'ejs');

app.use('/', mainRouter);
app.use('/productos', productsRouter);

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('servidor en puerto 3000'));
