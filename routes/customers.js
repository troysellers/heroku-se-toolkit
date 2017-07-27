'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

   req.data.title = 'Customers Using Heroku';
   req.data.page = 'customers';
   req.data.customer_style = 'slds-is-active';

   res.render('customers', req.data);
});

module.exports = router;
