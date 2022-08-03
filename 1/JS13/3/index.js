const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/html') {
        res.setHeader('content-type', 'text/html');
        res.end(fs.readFileSync('./files/1.html'));
    } else if (req.url === '/css') {
        res.setHeader('content-type', 'text/css');
        res.end(fs.readFileSync('./files/1.css'));
    } else if (req.url === '/jpeg') {
        res.setHeader('content-type', 'image/jpeg');
        res.end(fs.readFileSync('./files/1.jpeg'));
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
}).listen(5000);