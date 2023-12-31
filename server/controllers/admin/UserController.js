const UserService = require("../../services/admin/UserService")

const JWT = require('../../util/JWT')
const UserController = {
  login: async (req, res) => {
    const method = req.method;
    if (method === "POST" && req.path === "/admin/login") {
      const result = await UserService.login(req)
      if(result.code === 200) {
        const token = JWT.generate({
          _id:result.data[0].user_id,
          username:res.username
        },"600s")
        res.header("Authoriztion",token)
      }
      res.send({
        data:result
      })  
    }
  },
  edit: async (req, res) => {
    const method = req.method;
    const token = req.headers['authorization'].split(" ")[1]
    var payload = JWT.verify(token)
    if (method === "POST" && req.path === "/admin/user/edit") {
      const result = await  UserService.edit({_id:payload._id,req})
      res.send({
        data:result
      })  
    }
  },
  editPass: async (req, res) => {
    const method = req.method;
    const token = req.headers['authorization'].split(" ")[1]
    var payload = JWT.verify(token)
    if (method === "POST" && req.path === "/admin/user/editPass") {
      const result = await  UserService.editPass({_id:payload._id,req})
      res.send({
        data:result
      })
    }
  }
}
module.exports = UserController