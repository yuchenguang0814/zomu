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
        },"1000s")
        res.header("Authoriztion",token)
      }
      res.send({
        data:result
      })  
    }
  }
}
module.exports = UserController