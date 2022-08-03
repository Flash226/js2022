const http = require('http');
const fs = require('fs');
const mime = require('mime-types');

http.createServer((req, res) => {
    if (req.url === '/html') {
        res.setHeader('content-type', mime.lookup('1.html'));
        res.end(fs.readFileSync('./files/1.html'));
    } else if (req.url === '/css') {
        res.setHeader('content-type', mime.lookup('1.css'));
        res.end(fs.readFileSync('./files/1.css'));
    } else if (req.url === '/jpeg') {
        res.setHeader('content-type', mime.lookup('1.jpeg'));
        res.end(fs.readFileSync('./files/1.jpeg'));
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
}).listen(5000);