var express = require('express');
const NewController = require('../../controllers/admin/NewController')
var NewRouter = express.Router();
const multer = require('multer');
const newUploads = multer({dest: 'public/newUploads/'})
NewRouter.post('/admin/new/addnew',newUploads.single('file'),NewController.add)
NewRouter.get('/admin/new/getNews',NewController.get)
module.exports = NewRouter;