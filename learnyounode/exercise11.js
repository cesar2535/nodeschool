var http = require('http');
var fs = require('fs');

var option = {
  port: process.argv[2],
  file: process.argv[3]
};

var server = http.createServer(function(req, res) {
  console.log(req);
});

server.listen(option.port);