const express = require('express');
const server = express();
const fs = require('fs');
const axios = require('axios');
// const product = require('./public/product.json')

server.set('view engine', 'ejs');
server.set('views', './views/');

server.use(express.static(`${__dirname}./public`));


server.get('/', (req, res) => {
    res.render('test');
});


server.listen(3000, () => {
    console.log('Я работаю')
}); 