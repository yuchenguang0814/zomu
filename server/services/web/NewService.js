const { getNewById,getAllNew,getTotalNew,getPageNewById } = require("../../sql/new")
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
            return getTotalNew(req).then(count => {
              if (res.length === 0) {
                result.code = 201
                result.message = '获取案例数量失败'
                return result
            } else {
              result.code = 200
              result.message = '获取案例列表成功'
              result.data = JSON.parse(JSON.stringify(res))
              result.count = count
              return result
            }
          }) 
          
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
  getPageNew:async (req) => {
    const result = {
      code: null,
      message: '',
      data: ''
    }
    return getPageNewById(req).then(res => {
      if (res.length === 0) {
        result.code = 201
        result.message = '获取案例失败'
        return result
    } else {
      return getTotalNew(req).then(count => {
        if (res.length === 0) {
          result.code = 201
          result.message = '获取案例数量失败'
          return result
      } else {
        result.code = 200
        result.message = '获取案例列表成功'
        result.data = JSON.parse(JSON.stringify(res))
        result.count = count
        return result
      }
    })
  }
})
  }}
module.exports = ProService