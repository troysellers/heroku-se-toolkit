'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   let data = {};
   data.title = 'Why Heroku?';
   data.why_style = 'slds-is-active';

  res.render('index', data);
});

module.exports = router;
