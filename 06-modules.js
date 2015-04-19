var fileRead = require('./06-module');

fileRead(process.argv[2], process.argv[3], function(err, list) {
  if (err) {
    return console.log(err)
  }
  list.forEach(function(item) {
    console.log(item);
  });
});

