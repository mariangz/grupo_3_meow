const express = require('express');

const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath));

app.listen(3001, (req, res) => {
    console.log('servidor corriendo en el puerto 3001');
});

app.get('/', (req, res) => {
    const publicHtml = path.resolve(__dirname, './views/login.html');
    res.sendFile(publicHtml); 
});
