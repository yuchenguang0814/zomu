var express = require('express');
const NewController = require('../../controllers/web/NewController')
var NewRouter = express.Router();
NewRouter.get('/web/new/getNew/:id',NewController.get)
NewRouter.get('/web/new/getNew',NewController.get)
NewRouter.get('/web/new/getPageNew/:page',NewController.getPage)
module.exports = NewRouter;