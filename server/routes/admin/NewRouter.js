var express = require('express');
const NewController = require('../../controllers/admin/NewController')
var NewRouter = express.Router();
const multer = require('multer');
const newUploads = multer({dest: 'public/newUploads/'})
NewRouter.post('/admin/new/addnew',newUploads.single('file'),NewController.add)
NewRouter.get('/admin/new/getNews',NewController.get)
NewRouter.get('/admin/new/getNews/:id',NewController.get)
NewRouter.post('/admin/new/getNews',newUploads.single('file'),NewController.edit)
NewRouter.put('/admin/new/publish',NewController.editPublish)
NewRouter.delete('/admin/new/delete/:id',NewController.delete)
module.exports = NewRouter;