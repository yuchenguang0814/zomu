var express = require('express');
var Admin = express.Router();

/* GET users listing. */
Admin.get('/admin', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = Admin;
