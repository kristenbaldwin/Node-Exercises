var fs = require('fs');
var content = fs.readFile(process.argv[2]).toString().split('\n').length - 1;
console.log(content);