var fs = require('fs');
var path = require('path');

module.exports = function(dirname, extension, callback) {
  var returnList = []

    fs.readdir(dirname, function(err, list){
      if (err) {
        return callback(err)
      }
      list.forEach(function(file) { 
        if(path.extname(file) === '.' + extension){
          returnList.push(file);
        }
      });
      callback(null, returnList);
    });
};

