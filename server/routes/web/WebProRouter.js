var express = require('express');
const ProController = require('../../controllers/web/ProController')
var ProRouter = express.Router();
ProRouter.get('/web/pro/getProsByIshome',ProController.getProsByIshome)
ProRouter.get('/web/pro/getPro/:id',ProController.get)
module.exports = ProRouter;