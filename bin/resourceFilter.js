'use strict'

var jsonfile = require('jsonfile');
var file = './data/resources.json';
/* 
   simple midleware to load resources from json file 
   this is the content that is displayed in the modal window   
*/
let resourceFilter = function (req, res, next) {

   if(!req.data) {
      req.data = {};
   }
   req.data.resources = jsonfile.readFileSync(file);
   req.data.analytics = process.env.GOOGLE_ANALYTICS_TRACKING_ID;
   
   next();
}

module.exports = resourceFilter;