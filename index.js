const express = require('express');

const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath));

app.listen(3000, (req, res) => {
    console.log('servidor corriendo');
});

app.get('/', (req, res) => {
    const publicHtml = path.resolve(__dirname, './views/home.html');
    res.sendFile(publicHtml); 
});