'use strict'

var express = require('express');
var router = express.Router();
// load environment variables if we aren't in Heroku

/*
   troy@heroku.toolkit
*/

let client_id = process.env.CLIENT_ID;
let client_secret = process.env.CLIENT_SECRET;
let redirect_uri = process.env.REDIRECT_URI;

let url = 'https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id='+client_id+'&redirect_uri='+redirect_uri;



/* GET home page. */
router.get('/', function(req, res, next) {
   
   if(!req.session.auth) {
      console.log('Redirecting to ['+url+']');
      res.redirect(url);
   } else {
      console.log('We already have a session ');
      res.redirect('/');
   }
});

module.exports = router;