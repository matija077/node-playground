var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var heroes = db.collection('heroes');
  var heroesCurosr = heroes.find();
  heroesCurosr.toArray(function(err, docs) {
    if (docs) {
      res.send(docs);
    }
  });
  /*heroesCurosr.each(function(err, docs) {
    if (docs) {
      //used for ciruclar reference
     /* var cache = [];
      JSON.stringify(docs, function(key, value) {
          if (typeof value === 'object' && value !== null) {
              if (cache.indexOf(value) !== -1) {
                  // Circular reference found, discard key
                  return;
              }
              // Store value in our collection
              cache.push(value);
          }
          return value;
      });
      cache = null; // Enable garbage collection
      */
      /*res.send(docs);
    }
  });*/


  /*heroes.find({},{},function(e,docs){
        res.render('index', {
            "heroes" : docs
        });

	});*/
});

module.exports = router;
