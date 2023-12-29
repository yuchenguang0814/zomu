var express = require('express');
const ProController = require('../../controllers/web/ProController')
var ProRouter = express.Router();
ProRouter.get('/web/pro/getProsByIshome',ProController.getProsByIshome)
ProRouter.get('/web/pro/getPro/:id',ProController.get)
ProRouter.get('/web/pro/getCategory',ProController.getCategory)
ProRouter.get('/web/pro/getProByCid/:id',ProController.getProc)
ProRouter.get('/web/pro/getPageProByCid/:id',ProController.getProc)
ProRouter.get('/web/pro/getCateByCid/:id',ProController.getCate)
ProRouter.post('/web/pro/getProByname/:searchInfo',ProController.get)
module.exports = ProRouter;