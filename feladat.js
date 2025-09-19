var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('index.html', 'utf8', function(err, data){ 
        res.end(data);
    });       
    console.log('Fájl beolvasva'); 
}).listen(8080);

