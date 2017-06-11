var express = require('express');
var router = express.Router();

/* GET Demos page. */
router.get('/', function(req, res, next) {
   console.log('functioning..');
  res.render('demos', { title: 'Heroku Demos' });
});

module.exports = router;
