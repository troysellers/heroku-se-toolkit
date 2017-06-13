'use strict'

var logger = require('morgan');

let authFilter = function (req, res, next) {
   if(req.path.startsWith('/auth/')) {
      if(!req.session.auth) {
         req.url = '/login';
         next('route');
      } else {
         console.log('We should be checking for sessions');
      }
   }
   //https://www.npmjs.com/package/connect-redis  
   next();
}

module.exports = authFilter;