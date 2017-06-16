'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

   req.data.title = 'Common Architectures';
   req.data.architecture_style = 'slds-is-active';
   

   res.render('architecture', req.data);
});

module.exports = router;
