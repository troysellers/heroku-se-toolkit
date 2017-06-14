'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

   req.data.title = 'Data Services';
   req.data.data_style = 'slds-is-active';
   
  res.render('data', req.data);
});

module.exports = router;
