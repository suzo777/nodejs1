const http = require('http');	
const server = http.createServer((req, res) => {
    res.end('Hello World!\n');
}).listen(4000);
