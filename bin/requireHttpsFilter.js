'use strict'

/* 
   simple midleware to redirect if not HTTPS
   Have also added in test for old URL, redirect and set notification to user. 
*/
let requireHttpsFilter = function (req, res, next) {

    if(process.env.MODE != 'dev') {
        if(req.protocl != 'https') {
            res.redirect(301, `https://${req.hostname+req.originalUrl}`); // redirect to the secure version of the URL
        } else if(req.hostname.indexOf(process.env.APP_URL == -1 )) {
            req.data.redirect = 'You have been redirected to the new URL. Please update your bookmarks';
            res.redirect(301, `https://${process.env.APP_URL+req.originalUrl}`); // redirect to the new URL
        }
    } else {
        console.log(`Ignoring HTTPS and rewrite check... MODE env is set to [${process.env.MODE}]`);
    }
    next();
}

module.exports = requireHttpsFilter;