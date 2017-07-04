'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

   req.data.title = 'What are Dynos';
   req.data.page = 'dynos';
   req.data.dynos_style = 'slds-is-active';

   res.render('dynos', req.data);
});

module.exports = router;
