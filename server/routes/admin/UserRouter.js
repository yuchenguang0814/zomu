var express = require('express');
const UserController = require('../../controllers/admin/UserController')
var UserRouter = express.Router();

/* GET home page. */
UserRouter.post('/admin/login', UserController.login)
UserRouter.get('/admin/home', (req, res) => {
  res.send({
    ok:1
  })
})
module.exports = UserRouter;
