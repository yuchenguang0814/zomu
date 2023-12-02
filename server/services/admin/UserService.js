const { getLogin, getLoginUser } = require("../../sql/admin/login");
const UserService = {
  login: async (req) => {
    let user = {
      code: null,
      message: '',
      data: []
    }
      const { username, password } = req.body
      return getLoginUser(username).then(res => {
        if (res.length === 0) {
          user.code = 201
          user.message = '用户名不存在'
          return user
        } else {
          return getLogin(username, password).then(res => {
            if (res.length === 0) {
              user.code = 202
              user.message = '用户名和密码不匹配'
              return user
            } else {
              user.code = 200
              user.message = '登录成功'
              user.data = JSON.parse(JSON.stringify(res))
              return user
            }
          })
        }
      })
    }
  }
module.exports = UserService