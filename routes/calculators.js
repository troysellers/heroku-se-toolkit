'use strict'

var express = require('express');
var router = express.Router();

/* GET Video page. */
router.get('/', function(req, res, next) {

   req.data.title = 'Calculators';
   req.data.calculator_style = 'slds-is-active';
   
  res.render('calculators', req.data);
});

module.exports = router;
