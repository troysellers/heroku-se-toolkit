'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

   req.data.title = 'Heroku Connect';
   req.data.connect_style = 'slds-is-active';
   
   res.render('connect', req.data);
});

module.exports = router;
