
// 1. Import library http.
const http = require("http");
// what is https => secure verson of http.

// 2. create server
http.createserver((req, res)=>{
    res.end("Welcome to NodeJS Server");
}).listen(4000);

// path => localhost 4000
// req, res => we are ending response and returning it to client.
// what is server => 
// webapplication server
// web server => webclients [http]
// need to send url , port, req method, body, headers.