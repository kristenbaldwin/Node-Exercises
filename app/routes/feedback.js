var express = require('express');
var router = express.Router();


router.get('/contacts', function(req, res) {
    res.render('feedback', {
        pageID: 'feedback'
    });
});

module.exports = router;

