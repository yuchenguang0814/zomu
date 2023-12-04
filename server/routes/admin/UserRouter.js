var express = require('express');
const UserController = require('../../controllers/admin/UserController')
var UserRouter = express.Router();

/* GET home page. */
UserRouter.post('/admin/login', UserController.login)
UserRouter.post('/admin/user/edit',UserController.edit)
UserRouter.post('/admin/user/editPass',UserController.editPass)

module.exports = UserRouter;
