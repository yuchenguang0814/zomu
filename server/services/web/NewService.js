const { getNewById,getAllNew } = require("../../sql/new")
const ProService = {
  getNew:async (req) => {
    const result = {
      code: null,
      message: '',
      data: ''
    }
    if(!req.params.id) {
      return getAllNew(req).then(res => {
        if (res.length === 0) {
          result.code = 201
          result.message = '获取案例列表失败'
          return result
        } else {
          result.code = 200
          result.message = '获取案例列表成功'
          result.data = JSON.parse(JSON.stringify(res))
          return result
        }
      })
    }
    else {
      return getNewById(req).then(res => {
        if (res.length === 0) {
          result.code = 201
          result.message = '获取案例失败'
          return result
        } else {
          result.code = 200
          result.message = '获取案例成功'
          result.data = JSON.parse(JSON.stringify(res))
          return result
        }
      })
    }
  },
}
module.exports = ProService