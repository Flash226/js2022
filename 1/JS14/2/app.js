const express = require('express');
const serv = express();

let jsonData = {"name":"Иван","age":37,"mother":{"name":"Ольга","age":58},"children":["Маша","Игорь","Таня"],"married": true,"dog":null};

serv.get('/json', (req, res) => {
    res.json(jsonData)
});

serv.get('/file', (req, res) => {
    res.sendFile(__dirname + '/img/1.jpeg')
});

serv.listen(3000);