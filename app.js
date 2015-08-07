var http = require('http');
var express = require('express');
var app = express();
console.log(__dirname +'/public');

app.use(express.static(__dirname + '/public'));

http.createServer(app).listen(8080);
