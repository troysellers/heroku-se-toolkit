'use strict'

/* 
   simple midleware to redirect if not HTTPS
   Have also added in test for old URL, redirect and set notification to user. 
*/
let requireHttpsFilter = function (req, res, next) {

    console.log('What is going on ' +req.hostname);
   
   next();
}

module.exports = requireHttpsFilter;