var port = Number(process.argv[2]);

var http = require('http');
var stream = require('stream');

var server = http.createServer(function (request, response) {
  request.pipe(upperCaser)
         .pipe(response);
});

server.listen(port);

var upperCaser = new stream.Transform;

upperCaser._transform = function (chunk, encoding, done) {
  var data = chunk.toString().toUpperCase();
  this.push(data);
  done();
}
