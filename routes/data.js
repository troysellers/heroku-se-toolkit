var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('data', { title: 'Data Services on Heroku' });
});

module.exports = router;
