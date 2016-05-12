var express = require('express');
var router = express.Router();

/* GET heroes  */
router.get('/', function(req, res, next) {
  var db = req.db;
  var heroes = db.collection('heroes');
 /* heroes.insert({name:'yolo'}, function(err, result) {

  });*/
  //console.log(heroes);
  //res.send(heroes);
});

module.exports = router;
