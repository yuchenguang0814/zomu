var express = require('express');
const CateController = require('../../controllers/admin/CateController')
var CateRouter = express.Router();
const multer = require('multer');
const cateUploads = multer({dest: 'public/cateUploads/'})
CateRouter.delete('/admin/cate/delete/:id',CateController.delete)
CateRouter.get('/admin/cate/getcates',CateController.get)
CateRouter.get('/admin/cate/getcates/:id',CateController.getCategory)
CateRouter.post('/admin/cate/getcates',cateUploads.single('file'),CateController.edit)
CateRouter.post('/admin/cate/addcate',cateUploads.single('file'),CateController.add)
module.exports = CateRouter;