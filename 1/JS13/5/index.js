const http = require('http');
const fs = require('fs');
const mime = require('mime-types');
const url = require('url');

http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true);
    const fileName = urlObj.pathname.slice(urlObj.pathname.lastIndexOf('/') + 1);

    if (urlObj.pathname.lastIndexOf('.') != -1) {
        if (urlObj.pathname.slice(0, urlObj.pathname.length - fileName.length) != '/files/') {
            res.end('Wrong folder');
        } else {
            if (fs.existsSync(`.${urlObj.pathname}`)) {
                res.setHeader('content-type', mime.lookup(fileName));
                res.end(fs.readFileSync(`.${urlObj.pathname}`));
            } else {
                res.end('File not found');
            }
        }
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }

}).listen(5000);

