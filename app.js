var express = require('express');
var cors = require('express-cors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var db = mongoose.connection;
var dbConnect

MongoClient.connect("mongodb://localhost:27017/db", function(err, db){
  dbConnect = db;
});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

//Order is important to select the routing use of declaration
//First
//Declaration of route to
//** root
//** users
//Add webservices
var routes = require('./controller/routes/index');
var users = require('./controller/routes/users');
var register = require ('./controller/routes/register');
var remove = require ('./controller/routes/remove');
var login = require ('./controller/routes/login');
var logout = require ('./controller/routes/logout');
var createGroup = require ('./controller/routes/createGroup');
var removeGroup = require ('./controller/routes/removeGroup');
var renameGroup = require ('./controller/routes/renameGroup');
var addDevice = require ('./controller/routes/addDevice');
var removeDevice = require ('./controller/routes/removeDevice');
var renameDevice = require ('./controller/routes/renameDevice');
var addDeviceToGroup = require ('./controller/routes/addDeviceToGroup');
var removeDeviceFromGroup = require ('./controller/routes/removeDeviceFromGroup');
var activate = require ('./controller/routes/activate');
var desactivate = require ('./controller/routes/desactivate');

var app = express();
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

//vire la sécurité header
app.use(cors({
  allowedOrigins:['*']

}))

app.use(function(req, res, next) {
  var oneof = false;
  if(req.headers.origin) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    oneof = true;
  }
  if(req.headers['access-control-request-method']) {
    res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
    oneof = true;
  }
  if(req.headers['access-control-request-headers']) {
    res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
    oneof = true;
  }
  if(oneof) {
    res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
  }

  // intercept OPTIONS method
  if (oneof && req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});



//Second
// view engine setup
//Locate all Jade files into directory views
// All viewn off MVC are script into Jade templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//** Link sub-url to
//Here all public resources are into public directory
app.use(/*"/",*/ express.static(path.join(__dirname, 'public')));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//Here define the logical routing url -> javascript code
app.use('/', routes);
app.use('/users', users);
app.use('/register',register);
app.use('/remove',remove);
app.use('/login',login);
app.use('/logout',logout);
app.use('/createGroup',createGroup);
app.use('/removeGroup',removeGroup);
app.use('/renameGroup',renameGroup);
app.use('/addDevice',addDevice);
app.use('/removeDevice',removeDevice);
app.use('/renameDevice',renameDevice);
app.use('/addDeviceToGroup',addDeviceToGroup);
app.use('/removeDeviceFromGroup',removeDeviceFromGroup);
app.use('/activate',activate);
app.use('/desactivate',desactivate);

// After locate this function into other file
function handle_errors(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}
// error handlers
// catch 404 and forward to error handler
app.use(handle_errors);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
