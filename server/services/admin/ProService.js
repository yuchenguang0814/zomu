// const { addNews,getNewsList,editPublish,removeNewById,editNewById } = require("../../sql/admin/news");
const { getGoodsCate } = require("../../sql/admin/goodsCate")
const { addGoods } = require("../../sql/admin/addGoods")
const { getGoods, removeGoodById, editPublish, editHome, editGoodById } = require("../../sql/admin/goods")
const ProService = {
  getCate:async (req) => {
    const result = {
      code: null,
      message: '',
      data: ''
    }
    return getGoodsCate(req).then(res => {
      if (res.length === 0) {
        result.code = 201
        return result
      } else {
        result.code = 200
        result.data = JSON.parse(JSON.stringify(res))
        return result
      }
    })
  },
  addPro:async (req) => {
    const result = {
      code: null,
      message: ''
    }
    const data = req.req
    return addGoods(data).then(res => {
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
  editPro:async (req) => {
    const result = {
      code: null,
      message: ''
    }
    const data = req.req
    return editGoodById(data).then(res => {
      if (res.length === 0) {
        result.code = 201
        result.message = '更新产品失败'
        return result
      } else {
        result.code = 200
        result.message = '更新产品成功'
        return result
      }
    })
  },
  getPro:async (req) => {
    const result = {
      code: null,
      message: '',
      data: ''
    }
    if(!req.params.id) {
      return getGoods(req).then(res => {
        if (res.length === 0) {
          result.code = 201
          result.message = '获取产品列表失败'
          return result
        } else {
          result.code = 200
          result.message = '获取产品列表成功'
          result.data = JSON.parse(JSON.stringify(res))
          return result
        }
      })
    } else {
      return getGoods(req.params).then(res => {
        if (res.length === 0) {
          result.code = 201
          result.message = '获取产品失败'
          return result
        } else {
          result.code = 200
          result.message = '获取产品成功'
          result.data = JSON.parse(JSON.stringify(res))
          return result
        }
      })
    }
    
  },
  publish:async (req) => {
    const result = {
      code: null,
      message: '',
    }
    return editPublish(req).then(res => {
      if (res.length === 0) {
        result.code = 201
        result.message = '修改失败'
        return result
      } else {
        result.code = 200
        result.message = '修改成功'
        return result
      }
    })
  },
  home:async (req) => {
    const result = {
      code: null,
      message: '',
    }
    return editHome(req).then(res => {
      if (res.length === 0) {
        result.code = 201
        result.message = '修改失败'
        return result
      } else {
        result.code = 200
        result.message = '修改成功'
        return result
      }
    })
  },
  deletePro:async (req) => {
    const result = {
      code: null,
      message: '',
    }
    return removeGoodById(req).then(res => {
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
module.exports = ProService