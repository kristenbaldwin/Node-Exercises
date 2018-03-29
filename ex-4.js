// var fs = require('fs');
// fs.readdir(process.argv[2], function (error, list) {
//     if (error) {
//         console.log(error.message);
//         return;
//     } 
//     var answer = list.filter(function(e) {
//         return e.includes('.md');
//     })
//     console.log(answer.toString().split(',').join('\n'));
// });

var fs = require('fs');
var path = require('path');
var ext = "." + process.argv[3];

fs.readdir(process.argv[2], function (error, list) {
    if (error) {
        console.log(error.message);
        return;
    }
    list.forEach(function(e) {
            if (path.extname(e) == ext) {
                console.log(e);
            }
    })
});