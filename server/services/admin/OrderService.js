const { getOrdersList, removeOrderById } = require("../../sql/orders")
const OrderService = {
  getOrder:async (req) => {
    const result = {
      code: null,
      message: '',
      data: ''
    }
    if(!req.params.id) {
      return getOrdersList(req).then(res => {
        if (res.length === 0) {
          result.code = 201
          result.message = '获取留言列表失败'
          return result
        } else {
          result.code = 200
          result.message = '获取留言列表成功'
          result.data = JSON.parse(JSON.stringify(res))
          return result
        }
      })
    } else {
    return getOrderById(req).then(res => {
      if (res.length === 0) {
        result.code = 201,
        result.message = '获取留言失败'
        return result
      } else {
        result.code = 200
        result.message = '获取留言成功'
        result.data = JSON.parse(JSON.stringify(res))
        return result
      }
    })
  }
  },
  addOrder:async (req) => {
    const result = {
      code: null,
      message: ''
    }
    const data = req.req
    return addOrder(data).then(res => {
      if (res.length === 0) {
        result.code = 201
        result.message = '添加产品失败'
        return result
      } else {
        result.code = 200
        result.message = '添加产品成功'
        return result
      }
    })
  },
  deleteOrder:async (req) => {
    const result = {
      code: null,
      message: '',
    }
    return removeOrderById(req).then(res => {
      if (res.length === 0) {
        result.code = 201
        result.message = '删除失败'
        return result
      } else {
        result.code = 200
        result.message = '删除成功'
        return result
      }
    })
  }
  
}
module.exports = OrderService