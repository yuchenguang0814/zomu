var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var usersRouter = require('./routes/users');
var UserRouter = require('./routes/admin/UserRouter');
const JWT = require('./util/JWT');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 中间件
app.use((req, res, next) => {
  if(req.url === '/admin/login') {
    next()
    return
  }
  const token = req.headers['authorization'].split(" ")[1]
  if(token) {
    var payload = JWT.verify(token)
    if(payload) {
      const newToken = JWT.generate({
        _id:payload._id,
        username:payload.username
      },"1000s")
      res.header("Authoriztion",newToken)
      next()
    } else {
      res.status(401).send({errCode:'-1',errInfo:'token过期'})
    }
  }
})

// app.use('/admin/users', usersRouter);
app.use(UserRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
