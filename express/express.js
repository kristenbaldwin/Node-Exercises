var express = require('express');
var app = express();
// var router = express.Router();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/cats'));
app.use(require('./routes/dogs'));
app.use(require('./routes/cats_and_dogs'));
app.use(require('./routes/greet'));

app.listen(3000, function( ){
    console.log('Example app listening on port');
});