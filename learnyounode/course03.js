var fs = require('fs');
// var buf = fs.readFile(process.argv[2]);
// var str = buf.toString();
// var chars = str.split('\n');
// var num = chars.length - 1;

fs.readFile(process.argv[2], function(err, data) {
  var num = data.toString().split('\n').length - 1;
  console.log(num);
});