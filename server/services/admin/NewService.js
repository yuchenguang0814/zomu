const { addNews,getNewsList } = require("../../sql/admin/news");
const NewService = {
  addNew:async (req) => {
    const result = {
      code: null,
      message: ''
    }
    const data = req.req
    return addNews(data).then(res => {
      if (res.length === 0) {
        result.code = 201
        result.message = '添加新闻失败'
        return result
      } else {
        result.code = 200
        result.message = '添加新闻成功'
        return result
      }
    })
  },
  getNew:async (req) => {
    const result = {
      code: null,
      message: '',
      data: ''
    }
    return getNewsList(req).then(res => {
      if (res.length === 0) {
        result.code = 201
        result.message = '获取新闻列表失败'
        return result
      } else {
        result.code = 200
        result.message = '获取新闻列表成功'
        result.data = JSON.parse(JSON.stringify(res))
        return result
      }
    })
  }
}
module.exports = NewService