'use strict';
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World'); //My name is Arshdeep Singh(200427322)
}).listen(3000);
console.log('Server running at http://localhost:3000/');
