'use strict'

var express = require('express');
var router = express.Router();

/* GET Demos page. */
router.get('/', function(req, res, next) {

   req.data.title = 'Heroku Demos';
   req.data.demo_style = 'slds-is-active';

   res.render('demos', req.data);
});

module.exports = router;
