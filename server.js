var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
  app.use('/static', express.static(path.join(__dirname,'node_modules')));
  app.use('/static', express.static(path.join(__dirname,'assets')));
  res.sendFile(__dirname + '/index.html');
});

app.listen(8080);
