var express = require('express');
var router = express.Router();

router.get('/cats_and_dogs', function (req, res) {
    res.render('cats_and_dogs');
});

module.exports = router;