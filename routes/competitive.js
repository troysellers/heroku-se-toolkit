'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   let data = {};
   data.title = 'Competitive';
   data.competitive_style = 'slds-is-active';
   
  res.render('competitive', data);
});

module.exports = router;
