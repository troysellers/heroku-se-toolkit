'use strict'

var express = require('express');
var router = express.Router();
var logger = require('morgan');

/* GET home page. */
router.get('/', function(req, res, next) {

   logger.info('Home page...');
   req.data.title = 'Why Heroku?';
   req.data.why_style = 'slds-is-active';
   console.log(req.data.resources);
   res.render('index', req.data);
});

module.exports = router;
