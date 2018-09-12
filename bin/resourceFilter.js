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
        // if we are not in dev mode, setup GA tracking
        if(process.env.MODE != 'dev') {
            req.data.analytics = process.env.GOOGLE_ANALYTICS_TRACKING_ID;
        }

        next();
    }

module.exports = resourceFilter;