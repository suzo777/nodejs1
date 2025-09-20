var pg = require('pg');
//var conString = "postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";
var conString = "postgresql://nodejs1_user:2NlfSGty4r1woCFSrCJC2nY7gyzFOhRt@dpg-d375rbffte5s73avaeag-a/nodejs1";
var client = new pg.Client(conString);
client.connect();

const result = await client.query('SELECT NOW()')
console.log(result)
//await client.end()


/*

import { Client } from 'pg'
const client = new Client()
 
await client.connect()
 
const result = await client.query('SELECT NOW()')
console.log(result)
 
await client.end()

*/

/*
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
    host: "dpg-d375rbffte5s73avaeag-a",
    //host: "0.0.0.0",
    //host: "localhost",
    //host: "postgresql://nodejs1_user:2NlfSGty4r1woCFSrCJC2nY7gyzFOhRt@dpg-d375rbffte5s73avaeag-a/nodejs1",
    //host: "127.0.0.1",
    user: "nodejs1_user",
    password: "2NlfSGty4r1woCFSrCJC2nY7gyzFOhRt",
    //port: 5432,
    database : 'nodejs1'
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
 */
