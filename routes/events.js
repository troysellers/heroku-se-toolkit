'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

   req.data.title = 'Building Apps with Events';
   req.data.events_style = 'slds-is-active';
   
   res.render('events', req.data);
});

module.exports = router;
