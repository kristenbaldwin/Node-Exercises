var express = require('express');
var router = express.Router();

router.get('/greet/:name', function (req, res) {
    res.render('greet', {
        name: req.params.name,
        birthYear: new Date().getFullYear() - Number(req.query.age)
    }); 
});

module.exports = router;