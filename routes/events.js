var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('events', { title: 'Bulding Apps with Events' });
});

module.exports = router;
