var port = process.argv[2];
var filePath = process.argv[3];

var http = require('http');
var fs = require('fs');

var file= fs.createReadStream(filePath);

var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'content-type': 'text/plain' })
  file.pipe(response);
});

server.listen(port);
