const http = require('http'); 
var pg = require('pg');
console.log("Kapcsolódás az adatbázishoz ... "); 
console.log("Böngészőben: IP-cím:8080 ... ");  

const server = http.createServer((req, res) => { 
    adatb( (text) => {  
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(text);
        res.end();
    });
}).listen(8080);

function adatb(fuggveny) {
    var conString = "postgresql://nodejs1_user:2NlfSGty4r1woCFSrCJC2nY7gyzFOhRt@dpg-d375rbffte5s73avaeag-a/nodejs1";
    var client = new pg.Client(conString);
    client.connect(function(err){
    if(!err) 
        var text = " Database is connected ... ";
    else 
        var text = " Error connecting database ... ";
    fuggveny(text);	
    });
}

