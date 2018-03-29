var express = require('express');
var dataFile = require('./data/animals.json');
var app = express();
var io = require('socket.io')();

app.use(require('./routes/puppies'));
app.use(require('./routes/kittens'));
app.use(require('./routes/home'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.set('appData', dataFile);

var server = app.listen(1830, function(){
    console.log('Example app listening on port 1830');
});

io.attach(server);
io.on('connection', function(socket) {
    socket.on('postMessage', function(data) {
        io.emit('updateMessages', data);
    });
});