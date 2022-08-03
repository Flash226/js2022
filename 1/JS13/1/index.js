const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
    res.end('Hello!');
    } else if (req.url === '/contact'){
        res.end('Contact page')
    }else {
        res.statusCode = 404;
        res.end('Page not found')
    }
}).listen(5000);