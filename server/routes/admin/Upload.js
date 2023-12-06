var express = require('express');
var UploadRouter = express.Router();
const multer = require('multer');
const UploadController = require('../../controllers/admin/UploadController');
const userUploads = multer({dest: 'public/userUploads/'})
UploadRouter.post('/admin/upload',userUploads.single('file'),UploadController.upload)

module.exports = UploadRouter;