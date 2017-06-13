'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   let data = {};
   data.title = 'Building Apps with Events';
   data.events_style = 'slds-is-active';
   
  res.render('events', data);
});

module.exports = router;
