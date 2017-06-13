'use strict'

var express = require('express');
var router = express.Router();

/* GET Demos page. */
router.get('/', function(req, res, next) {
   let data = {};
   data.title = 'Heroku Demos';
   data.demo_style = 'slds-is-active';

  res.render('demos', data);
});

module.exports = router;
