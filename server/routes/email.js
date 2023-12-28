var express = require('express');
const sendMail = require('../util/SendEmail')
var EmailRouter = express.Router();
EmailRouter.post('/email',sendMail.post)
module.exports = EmailRouter;