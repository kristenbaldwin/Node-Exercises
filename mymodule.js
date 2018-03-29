// var fs = require('fs');
// var path = require('path');

// module.exports = function(directory, ext, callback) {
//     var extension = "." + ext;
//     fs.readdir(directory, function (error, list) {
//     if (error) {
//         console.log(error.message);
//         return;
//     }
//     list.forEach(function(e) {
//             if (path.extname(e) == extension) {
//                 console.log(e);
//             }
//     })
//     callback(null, result);
// });
// };

var fs = require('fs');
var path = require('path');

module.exports = function(dirname, ext, callback) {
  var extension = "." + ext;
  fs.readdir(dirname, function(err, files) {
    if (err) {
      callback(err, null);
    }
    else {
      result = [];
      files.forEach(function(entry) {
        if (path.extname(entry) == extension) {
          result.push(entry);
        }
      });
      callback(null, result);
    }
  });
  
};
