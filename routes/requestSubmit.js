'use strict'

var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');
var file = './data/architectures.json';

var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var helper = require('sendgrid').mail;

/* GET home page. */
router.post('/', function(req, res, next) {
   console.log(req.body);

   // if we have Sendgrid.
   if(process.env.SENDGRID_API_KEY) {
      console.log(`We have SENDGRID API KEY`);
      var from_email = new helper.Email(req.body.email);
      var to_email = new helper.Email(process.env.TO_EMAIL);
      var subject = 'Request for Heroku Architect from SDO';
      var content = new helper.Content('text/plain', 'A request for assistance for '+req.body.customer+' has come from an SDO . This is for the '+req.body.region+' region');
      var mail = new helper.Mail(from_email, subject, to_email, content);

      var request = sg.emptyRequest({
         method: 'POST',
         path: '/v3/mail/send',
         body: mail.toJSON()
      });

      sg.API(request, (error, response) => {
         if(error) {
            console.log(`We have a SENDGRID error ${error}`);
         } else {
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
         }
      });
   } else {
      console.log(`Failed to post to sendgrid with API Key [${process.env.SENDGRID_API_KEY}]`);
   }

   res.send({
      message: 'We have received your request! A member of the Heroku Architect Team will contact you soon.'
   });
});

module.exports = router;
