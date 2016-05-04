var express = require('express');
var router = express.Router();

/* GET heroes  */
router.get('/api/heroes', function(req, res, next) {
  var db = req.db;
  var heroes = db.get('heroes');
  res.json(heroes);
});

module.exports = router;
