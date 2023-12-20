var express = require('express');
const ProController = require('../../controllers/admin/ProController')
var ProRouter = express.Router();
const multer = require('multer');
const newUploads = multer({dest: 'public/proUploads/'})
ProRouter.get('/admin/pro/category',ProController.getCategory)

module.exports = ProRouter;