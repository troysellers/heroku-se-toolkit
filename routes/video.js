var express = require('express');
var router = express.Router();

/* GET Video page. */
router.get('/', function(req, res, next) {
  res.render('video', { title: 'Heroku Videos' });
});

module.exports = router;
