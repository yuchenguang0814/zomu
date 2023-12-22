var express = require('express');
const ProController = require('../../controllers/admin/ProController')
var ProRouter = express.Router();
const multer = require('multer');
const proUploads = multer({dest: 'public/proUploads/'})
ProRouter.get('/admin/pro/getPros',ProController.get)
ProRouter.get('/admin/pro/getPros/:id',ProController.get)
ProRouter.get('/admin/pro/category',ProController.getCategory)
ProRouter.post('/admin/pro/addpro',proUploads.single('file'),ProController.add)
ProRouter.post('/admin/pro/getPros',proUploads.single('file'),ProController.edit)
ProRouter.delete('/admin/pro/delete/:id',ProController.delete)
ProRouter.put('/admin/pro/publish',ProController.editPublish)
ProRouter.put('/admin/pro/home',ProController.editHome)
module.exports = ProRouter;