var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(res) {
  var result = '';
  res.pipe(bl(function(err, data) {
    result = result + data.toString();
  }));
  res.on('end', function(data) {
    console.log(result.length);
    console.log(result);
  });
}).on('error', function(err) {

});