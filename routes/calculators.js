'use strict'

var express = require('express');
var router = express.Router();

/* GET Video page. */
router.get('/', function(req, res, next) {
   let data = {};
   data.title = 'Calculators';
   data.calculator_style = 'slds-is-active';

  res.render('calculators', data);
});

module.exports = router;
