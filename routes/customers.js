'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

   req.data.title = 'Customer Stories';
   req.data.customer_style = 'slds-is-active';

   res.render('customers', req.data);
});

module.exports = router;
