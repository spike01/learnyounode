var http = require('http');
var url = process.argv[2];

http.get(url, function callback(response){
  var count = 0;
  var result = [];

  response.on('data', function(data) {
    count += Buffer.byteLength(data.toString());
    result.push(data);
  });

  response.on('end', function() {
    console.log(count);
    console.log(result.join('').toString());
  });

  response.on('error', console.error);
});


// official answer
//var http = require('http')
//var bl = require('bl')

//http.get(process.argv[2], function (response) {
  //response.pipe(bl(function (err, data) {
    //if (err)
      //return console.error(err)
        //data = data.toString()
        //console.log(data.length)
        //console.log(data)
  //}))
//})
