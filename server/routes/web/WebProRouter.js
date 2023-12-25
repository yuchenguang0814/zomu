var express = require('express');
const ProController = require('../../controllers/web/ProController')
var ProRouter = express.Router();
ProRouter.get('/web/pro/getProsByIshome',ProController.getProsByIshome)
module.exports = ProRouter;