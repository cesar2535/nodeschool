var http = require('http');
var bl = require('bl');
var async = require('async');

var httpGet = function(input, cb) {
  http.get(input, function(res) {
    var result = ''
    res.pipe(bl(function(err, data) {
      result = result + data.toString();
    }));
    res.on('end', function(data) {
      cb(null, result);
    });
  });
};

async.series([
  function(cb) {
    httpGet(process.argv[2], cb);
  },
  function(cb) {
    httpGet(process.argv[3], cb);
  },
  function(cb) {
    httpGet(process.argv[4], cb);
  }
], function(err, results) {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
});


/** official solution
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3) // yay! we are the last one!
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)
*/