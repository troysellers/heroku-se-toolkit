var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var helmet = require('helmet');
/*
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
const uuidV1 = require('uuid/v1');
*/
// load environment from .env file
require('dotenv').config();

var index = require('./routes/index');
var architecture = require('./routes/architecture');
var data = require('./routes/data');
var demos = require('./routes/demos');
var dynos = require('./routes/dynos');
var connect = require('./routes/connect');
var calculators = require('./routes/calculators');
var data = require('./routes/data');
var competitive = require('./routes/competitive');
var requestAnArchitect = require('./routes/requestAnArchitect');

var resourceFilter = require('./bin/resourceFilter');

var app = express();

let redis_url = process.env.REDIS_URL ? process.env.REDIS_URL : 'redis://localhost:6379'

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(helmet());
/*
app.set('trust proxy', 1); // trust first proxy
app.use(session({
   secret: 'mySecret',
   name: 'sessionId',
   genid: function(req) {
      return uuidV1();
   },
   cookie: {
      path: '/',
      httpOnly: true,
      secure: false,
      maxAge: 60000
   }, 
   resave: false,
   saveUninitialized: true,
   store: new RedisStore({
      url: redis_url
   })
}));
*/
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(resourceFilter); // load resource modal content from JSON file

app.use('/architecture', architecture);
app.use('/data', data);
app.use('/demos', demos);
app.use('/dynos', dynos);
app.use('/connect', connect);
app.use('/calculators', calculators);
app.use('/competitive', competitive);
app.use('/requestAnArchitect', requestAnArchitect);

app.use('/', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
