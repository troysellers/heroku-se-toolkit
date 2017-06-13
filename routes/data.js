'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   let data = {};
   data.title = 'Data Services';
   data.data_style = 'slds-is-active';
   
  res.render('data', data);
});

module.exports = router;
