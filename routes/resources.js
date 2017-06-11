var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('resources', { title: 'Further Resources for Heroku' });
});

module.exports = router;
