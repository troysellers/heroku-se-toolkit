'use strict'

var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');
var file = './data/demos.json';
/* GET Demos page. */
router.get('/', function(req, res, next) {

   req.data.title = 'Heroku Demos';
   req.data.demo_style = 'slds-is-active';
   req.data.demos = jsonfile.readFileSync(file);

   res.render('demos', req.data);
});

module.exports = router;
