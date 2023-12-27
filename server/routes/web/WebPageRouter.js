var express = require('express');
const PageController = require('../../controllers/web/PageController')
var PageRouter = express.Router();
PageRouter.get('/web/page/getPage/:id',PageController.get)
module.exports = PageRouter;