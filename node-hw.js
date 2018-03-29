// Read a file
var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('File to open: ', function(filename) {
    rl.close();
    fs.readFile(file, function(error, buffer) {
        if (error) {
            console.error(error.message);
            return;
        }
        var content = buffer.toString().toUpperCase();
        console.log(content);
    });
});

// DNS Lookup

// Read and write
