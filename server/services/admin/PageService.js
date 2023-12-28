const {getPageById,getPageList,editPageById} =  require("../../sql/page")

const PageService = {
  editPage:async (req) => {
    const result = {
      code: null,
      message: ''
    }
    const data = req.req
    return editPageById(data).then(res => {
      if (res.length === 0) {
        result.code = 201
        result.message = '更新页面失败'
        return result
      } else {
        result.code = 200
        result.message = '更新页面成功'
        return result
      }
    })
  },
  getPage:async (req) => {
    const result = {
      code: null,
      message: '',
      data: ''
    }
    if(!req.params.id) {
      return getPageList(req).then(res => {
        if (res.length === 0) {
          result.code = 201
          result.message = '获取页面列表失败'
          return result
        } else {
          result.code = 200
          result.message = '获取页面列表成功'
          result.data = JSON.parse(JSON.stringify(res))
          return result
        }
      })
    } else {
    return getPageById(req).then(res => {
      if (res.length === 0) {
        result.code = 201,
        result.message = '获取页面失败'
        return result
      } else {
        result.code = 200
        result.message = '获取页面成功'
        result.data = JSON.parse(JSON.stringify(res))
        return result
      }
    })
  }
  }
}
module.exports = PageService