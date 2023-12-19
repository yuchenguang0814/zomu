var express = require('express');
var UploadRouter = express.Router();
const multer = require('multer');
const UploadController = require('../../controllers/admin/UploadController');
const userUploads = multer({dest: 'public/userUploads/'})
const editUploads = multer({dest: 'public/Uploads/'})
UploadRouter.post('/admin/upload',userUploads.single('file'),UploadController.upload)
UploadRouter.post('/admin/editupload',editUploads.single('file'),UploadController.editupload)
module.exports = UploadRouter;