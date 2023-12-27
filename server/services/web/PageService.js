const {getPageById} =  require("../../sql/page")

const PageService = {
  getPage:async (req) => {
    const result = {
      code: null,
      message: '',
      data: ''
    }
    return getPageById(req).then(res => {
      if (res.length === 0) {
        result.code = 201
        result.message = '获取页面信息失败'
        return result
      } else {
        result.code = 200
        result.message = '获取页面信息成功'
        result.data = JSON.parse(JSON.stringify(res))
        return result
      }
    })
  }
}
module.exports = PageService