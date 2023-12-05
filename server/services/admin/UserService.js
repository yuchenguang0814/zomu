const { getLogin, getLoginUser } = require("../../sql/admin/login");
const { editUsers,editPass,getPass } = require("../../sql/admin/user")
const md5 = require('blueimp-md5');
const md5random = 'yWycs';
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
    },
  edit: async(req)=> {
    const result = {
      code: null,
      message: '',
      data: ''
    }
    return editUsers(req).then(res => {
      if (res.length === 0) {
        result.code = 201
        result.message = '修改用户信息失败'
        
        return result
      } else {
        result.code = 200
        result.message = '修改用户信息成功'
        result.data = req.req.body
        return result
      }
    })
  },
  editPass: async(req)=> {
    const result = {
      code: null,
      message: '',
      data:''
    }
    return getPass(req).then(res => {
      console.log(req.req.body.oldpass)
      const oldpass = md5(md5(req.req.body.oldpass))+md5random
      console.log(oldpass)
      console.log(res[0].password)
      if(oldpass !== res[0].password) {
        result.code = 201
        result.message = '原始密码错误'
        return result
      } else {
        return editPass(req).then(res => {
          if (res.length === 0) {
            result.code = 202
            result.message = '修改密码失败'
            return result
          } else {
            result.code = 200
            result.message = '修改密码成功'
            result.data = req.req.body.pass
            return result
          }
        })
      }
    })
   
  }
}
module.exports = UserService