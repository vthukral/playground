const http = require('http');
const fs = require('fs');
const _ = require('lodash');

//if you want to use it for web sockets
const server = http.createServer((req, res) => {
    //lodash
    const num = _.random(0, 20);

    console.log(`request made: ${num}`);
    console.log(req.url, req.method);

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about2':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about2');
            res.end();
            return;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log('Error!');
            res.statusCode = 500;
            res.end();
        }
        else {
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening to requests on port 3000');
});
