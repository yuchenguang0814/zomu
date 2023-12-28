const { getProductIsHome,getProduct,getAllGood,getGoodsCate,getGoodsBycid,getCateById,getGoodsByName} = require("../../sql/product")
const ProService = {
  getProBycid:async (req) => {
    const result = {
      code: null,
      message: '',
      data: ''
    }
      return getGoodsBycid(req.params).then(res => {
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
  },
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
  getCateBycid:async (req) => {
    const result = {
      code: null,
      message: '',
      data: ''
    }
    return getCateById(req).then(res => {
      if (res.length === 0) {
        result.code = 201,
        result.message = '获取分类失败'
        return result
      } else {
        result.code = 200
        result.message = '获取分类成功'
        result.data = JSON.parse(JSON.stringify(res))
        return result
      }
    })
  },
  getProIshome:async (req) => {
    const result = {
      code: null,
      message: '',
      data: ''
    }
    return getProductIsHome(req).then(res => {
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
  getPro:async (req) => {
    const result = {
      code: null,
      message: '',
      data: ''
    }
    if(!req.params.id) {
      if(!req.params.searchInfo){
        return getAllGood(req).then(res => {
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
      }else {
        return getGoodsByName(req).then(res => {
          if (res.length === 0) {
            result.code = 201
            result.message = '查询失败'
            return result
          } else {
            result.code = 200
            result.message = '查询成功'
            result.data = JSON.parse(JSON.stringify(res))
            return result
          }
        })
      }
      
    } 
    else {
      return getProduct(req).then(res => {
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
}
module.exports = ProService