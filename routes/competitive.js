'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

   req.data.title = 'Competitive';
   req.data.page = 'competitive';
   req.data.competitive_style = 'slds-is-active';
   
   res.render('competitive', req.data);
});

module.exports = router;
