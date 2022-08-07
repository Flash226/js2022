const express = require('express');
const serv = express();

serv.use(express.static('public'));
//відкриваємо файли з папки public '1.html' '/css/1.css' '/img/1.png' '/img/1.jpeg'
serv.listen(3000);