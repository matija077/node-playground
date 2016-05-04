var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   var db = req.db;
  var heroes = db.get('heroes');
  heroes.find({},{},function(e,docs){
        res.render('index', {
            "heroes" : docs
        });
    });
});

module.exports = router;
