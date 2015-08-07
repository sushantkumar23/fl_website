var express = require('express');

var app = express();
console.log(__dirname +'public');

app.get('/', function(req, res){
	res.send(express.static(__dirname + 'public'));
});

app.listen(8080);
