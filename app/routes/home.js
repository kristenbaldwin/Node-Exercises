var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    var data = req.app.get('appData');
    var allPics = [];
    var des = [];
    var names = [];
    data.forEach(function(item) {
        allPics = allPics.concat(item.imgURL);
        names = names.concat(item.name);
        des = des.concat(item.description);
    });

    res.render('home', {
        images: allPics,
        description: des,
        name: names,
        type: 'Puppy and Kitten',
        pageID: 'home'
    });
});

module.exports = router;

