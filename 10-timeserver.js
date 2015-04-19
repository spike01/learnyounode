var net = require('net');
var port = process.argv[2]


function currentTime() {
  var date = new Date();
    return date.getFullYear() + '-' 
      + getMonth(date) + '-' 
      + date.getDate() + ' ' 
      + date.getHours() + ':' 
      + date.getMinutes();
}

function getMonth(date) {
  return date.length == 1 ? '1' : '0' + (date.getMonth() + 1);
}

var server = net.createServer(function(socket) {
  socket.end(currentTime() + '\n');
});

server.listen(port);
