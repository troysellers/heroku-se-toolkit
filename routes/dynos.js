'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   let data = {};
   data.title = 'What are Dynos';
   data.dynos_style = 'slds-is-active';
   
  res.render('dynos', data);
});

module.exports = router;
