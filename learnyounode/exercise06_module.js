var fs = require('fs');
var path = require('path');

module.exports = function(pathname, extname, cb) {
  fs.readdir(pathname, function(err, data) {
    if (err)
      return cb(err);
    var fileList = [];
    for(var i = 0; i < data.length; i++) {
      if (path.extname(data[i]) === '.' + extname) {
        fileList.push(data[i]);
        console.log(data[i]);
      }
    }
    cb(null, fileList);
  });
};