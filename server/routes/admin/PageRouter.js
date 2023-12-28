var express = require('express');
const PageController = require('../../controllers/admin/PageController')
var PageRouter = express.Router();
PageRouter.get('/admin/page/getPage',PageController.get)
PageRouter.get('/admin/page/getPage/:id',PageController.get)
PageRouter.post('/admin/page/editPage',PageController.edit)
module.exports = PageRouter;