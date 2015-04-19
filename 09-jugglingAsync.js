var http = require('http');
var urls = [2, 3, 4]

var counter = 0
var results = [];

urls.forEach(function(arg) {


  http.get(process.argv[arg], function(response){

    var subResult = '';

    response.setEncoding('utf8');
    response.on('data', addChunk);
    response.on('end', printResults);

    function printResults() {
      results[arg-2] = subResult;
      counter ++;
      if(counter === 3) {
        results.forEach(function returnResult(result) {
          console.log(result);
        });
      }
    }

    function addChunk(chunk) {
      subResult += chunk;
    }

  });
});
