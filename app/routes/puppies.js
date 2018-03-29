var express = require('express');
var router = express.Router();


router.get('/puppies', function(req, res) {
    var data = req.app.get('appData');
    var allPics = [];
    var des = [];
    var names = [];
    data.forEach(function(item) {
        if (item.type == "puppy") {
            allPics = allPics.concat(item.imgURL);
            names = names.concat(item.name);
            des = des.concat(item.description);
        };
    });

    res.render('puppies', {
        images: allPics,
        description: des,
        name: names,
        type: 'Puppy',
        pageID: 'puppies'
    });
});

module.exports = router;

