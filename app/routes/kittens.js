var express = require('express');
var router = express.Router();


router.get('/kittens', function(req, res) {
    var data = req.app.get('appData');
    var allPics = [];
    var des = [];
    var names = [];
    data.forEach(function(item) {
        if (item.type == "kitten") {
            allPics = allPics.concat(item.imgURL);
            names = names.concat(item.name);
            des = des.concat(item.description);
        };
    });

    res.render('kittens', {
        images: allPics,
        description: des,
        name: names,
        type: 'Kitten',
        pageID: 'kittens'
    });
});

module.exports = router;

