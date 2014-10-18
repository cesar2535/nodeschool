var http = require('http'),
    url  = require('url'),
    port = process.argv[2];

var server = http.createServer(function(req, res) {
  var route = url.parse(req.url, true);
  var time = {};
  var date;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  switch(route.pathname) {
    case '/api/parsetime':
      console.log(route);
      date = new Date(route.query['iso']);
      time.hour = date.getHours();
      time.minute = date.getMinutes();
      time.second = date.getSeconds();
      res.end(JSON.stringify(time));
      break;
    case '/api/unixtime':
      date = new Date(route.query['iso']);
      time.unixtime = date.getTime()
      res.end(JSON.stringify(time));
      break;
    default:
      break;
  }

});

server.listen(port);

// official solution
// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))