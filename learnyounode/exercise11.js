var http = require('http');
var fs = require('fs');

var option = {
  port: process.argv[2],
  file: process.argv[3]
};

var server = http.createServer(function(req, res) {
  fs.createReadStream(option.file).pipe(res);
});

server.listen(option.port);

// official solution
// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))