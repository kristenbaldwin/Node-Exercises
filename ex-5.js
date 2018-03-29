// var path = require('path');
// var directory = process.argv[2];
// var ext = process.argv[3];
// var mymodule = require('./mymodule');

// mymodule(directory, ext, function(error, data) {
//     data.forEach(function(e) {
//         if (path.extname(e) == ext) {
//             console.log(e);
//         }
//     })
// })

var lslib = require('./lslib');

var dirname = process.argv[2];
var ext = process.argv[3];

lslib(dirname, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});

