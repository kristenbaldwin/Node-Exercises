var fs = require('fs');
fs.readFile(process.argv[2], function (error, buffer) {
    if (error) {
        console.log(error.message);
        return;
    } 
    var lines = buffer.toString().split('\n').length - 1;
    console.log(lines);
});