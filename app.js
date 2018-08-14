var express = require('express');
var path = require('path');
var createError = require('http-errors');

// Pages
var indexRouter = require('./routes/index');

// API
var houseApiRouter = require('./routes/api/house');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// You can use another render template engine. Ex. ejs, hbs, jade, dust.
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/house', houseApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only prividing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const statusCode = err.status || 500;
  // render error on API
  if (/.api/.test(req.url)) {
    return res.status(statusCode).json({
      code: statusCode,
      message: err.message
    });
  }

  // render the error page
  return res.status(statusCode).render('error');
});

module.exports = app;