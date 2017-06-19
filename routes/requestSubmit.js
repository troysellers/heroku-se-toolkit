'use strict'

var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');
var file = './data/architectures.json';

/* GET home page. */
router.post('/', function(req, res, next) {
   console.log(req.body);
   res.send({
      message: 'We have received your request! A member of the Heroku Architect Team will contact you soon.'
   });
});

module.exports = router;
