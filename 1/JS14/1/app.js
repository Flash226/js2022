const express = require('express');
const serv = express();

serv.get('/', (req, res) => {
    res.send ('Hello World!')
});

serv.get('/contact', (req, res) => {
    res.send ('Contact me!')
});

serv.get('/:cat/:id', (req, res) => {
    const{cat, id} = req.params;
    res.send (`Category ${cat} & id ${id}`)
});

serv.get('/:cat', (req, res) => {
    const {cat} = req.params;
    res.send (`Category ${cat}`)
});

serv.listen(3000);