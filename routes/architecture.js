'use strict'

var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');
var file = './data/architectures.json';

/* GET home page. */
router.get('/', function(req, res, next) {

   req.data.title = 'Common Architectures';
   req.data.page = 'architectures';
   req.data.architecture_style = 'slds-is-active';
   req.data.architectures = jsonfile.readFileSync(file);

   res.render('architecture', req.data);
});

module.exports = router;
