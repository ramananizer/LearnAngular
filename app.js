 var express = require('express');
 var https = require('https');
 var http = require('http');
 var fs = require('fs');
 var app = express();

 http.createServer(app).listen(80);
 app.get('/', function(req, res){
   res.send(app/index.html);
 });