var net = require('net');
var option = {
  port: process.argv[2]
};
var time = {
  year: void 8,
  month: void 8,
  date: void 8,
  hours: void 8,
  mins: void 8,
  format: void 8
};

var server = net.createServer(function(socket) {
  var date = new Date();
  var index = ['year', 'month', 'date', 'hours', 'mins'];
  time.year = date.getFullYear().toString();
  time.month = (date.getMonth() + 1).toString();
  time.date = date.getDate().toString();
  time.hours = date.getHours().toString();
  time.mins = date.getMinutes().toString();
  console.log(time.year.length);
  for (var i = 0; i < time.length; i++) {
    if (time[index[i]].length < 2)
      time[index[i]] = '0' + time[inex[i]];
  }
  time.format = time.year + '-' + time.month + '-' + time.date + ' ' + time.hours + ':' + time.mins;
  console.log(time.format);
  socket.write(time.format);
  socket.end();
});

server.listen(option.port);

// official solution
// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))