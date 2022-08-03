const http = require('http');

let personData = '{"name":"Иван","age":37,"mother":{"name":"Ольга","age":58},"children":["Маша","Игорь","Таня"],"married": true,"dog":null}';

http.createServer((req, res) => {
    if (req.url === '/html') {
    res.setHeader('content-type', 'text/html');
    res.end('<h2>HTML</h2>');
    } else if (req.url === '/txt'){
        res.setHeader('content-type', 'text/plain');
        res.end('<h2>txt</h2>');
    } else if (req.url === '/json'){
        res.setHeader('content-type', 'text/json');
        res.end(`${personData}`);
    }else {
        res.statusCode = 404;
        res.end('Page not found');
    }
}).listen(5000);