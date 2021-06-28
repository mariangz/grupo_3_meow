const express = require('express');

const app = express();
const mainRoutes = require('./routers/mainRoutes');

app.use(express.static('../public'));

app.set('view engine', 'ejs');

app.use('/', mainRoutes);

// eslint-disable-next-line no-console
app.listen(3000, () => console.log(`${__dirname}./public`));
