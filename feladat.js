const http = require('http'); 
var mysql      = require('mysql2');
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
var connection = mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_proba1",
    password: "FEFF@4hQ7&8Tmzt",
   database : 'freedb_proba123'
 });
connection.connect(function(err){
 if(!err) {
var text = " Database is connected ... ";
 } else {
var text = " Error connecting database ... ";
 }
		fuggveny(text);	
 });
}
