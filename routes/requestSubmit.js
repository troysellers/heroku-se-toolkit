'use strict'

var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');
var request = require('request');

var file = './data/architectures.json';



/* GET home page. */
router.post('/', function(req, res, next) {

   console.log('processing the request');

   var postData = {
      customer: req.body.customer,
      contact: req.body.email,
      region: req.body.region
   };
   console.log('postData '+JSON.stringify(postData));
   
   request({
      url: process.env.REQUEST_ENDPOINT,
      method: 'POST',
      headers: {
         'content-type':"application/json",
      },
      json: postData
   }, function(error, resp, body) {
      var message = "";
      if (error) {
         console.log(error);
         message = 'We have received your request! A member of the Heroku Architect Team will contact you soon.'
      } else {
         console.log(body);
         message = 'We have received your request! A member of the Heroku Architect Team will contact you soon.'
      } 
      res.send({
         message: message
      }); 
   });
});


module.exports = router;
