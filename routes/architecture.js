'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   let data = {};
   data.title = 'Common Architectures';
   data.architecture_style = 'slds-is-active';

   res.render('architecture', data);
});

module.exports = router;
