'use strict'

/* 
   simple midleware to redirect if not HTTPS
   Have also added in test for old URL, redirect and set notification to user. 
*/
let requireHttpsFilter = function (req, res, next) {
    console.log(req.query.redirect);

    if(process.env.MODE != 'dev') {

        if (req.hostname != process.env.APP_URL || req.protocol != 'https') {
            res.redirect(301, `https://${process.env.APP_URL+req.originalUrl}?redirect=true`); // redirect to the new URL
        } else {
            if(req.query.redirect) {
                req.data.redirect = `We have updated the URL to ${process.env.APP_URL}. Please update your bookmarks.`;
            }
            next(); 
        }
    } else {
        console.log(`Ignoring HTTPS and rewrite check... MODE env is set to [${process.env.MODE}]`);
        next(); 
    } 
}
module.exports = requireHttpsFilter;