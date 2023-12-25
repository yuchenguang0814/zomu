const { removeCateById, getCateById, editGoodById,getGoodsCate, addCate } = require("../../sql/admin/goodsCate")
const CateService = {
  getCate:async (req) => {
    const result = {
      code: null,
      message: '',
      data: ''
    }
    if(!req.params.id) {
      return getGoodsCate(req).then(res => {
        if (res.length === 0) {
          result.code = 201
          result.message = '获取分类列表失败'
          return result
        } else {
          result.code = 200
          result.message = '获取分类列表成功'
          result.data = JSON.parse(JSON.stringify(res))
          return result
        }
      })
    } else {
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
  }
  },
  addCate:async (req) => {
    const result = {
      code: null,
      message: ''
    }
    const data = req.req
    return addCate(data).then(res => {
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
  editCate:async (req) => {
    const result = {
      code: null,
      message: ''
    }
    const data = req.req
    return editGoodById(data).then(res => {
      if (res.length === 0) {
        result.code = 201
        result.message = '更新分类失败'
        return result
      } else {
        result.code = 200
        result.message = '更新分类成功'
        return result
      }
    })
  },
  // getPro:async (req) => {
  //   const result = {
  //     code: null,
  //     message: '',
  //     data: ''
  //   }
  //   if(!req.params.id) {
  //     return getGoods(req).then(res => {
  //       if (res.length === 0) {
  //         result.code = 201
  //         result.message = '获取产品列表失败'
  //         return result
  //       } else {
  //         result.code = 200
  //         result.message = '获取产品列表成功'
  //         result.data = JSON.parse(JSON.stringify(res))
  //         return result
  //       }
  //     })
  //   } else {
  //     return getGoods(req.params).then(res => {
  //       if (res.length === 0) {
  //         result.code = 201
  //         result.message = '获取产品失败'
  //         return result
  //       } else {
  //         result.code = 200
  //         result.message = '获取产品成功'
  //         result.data = JSON.parse(JSON.stringify(res))
  //         return result
  //       }
  //     })
  //   }
    
  // },
  // publish:async (req) => {
  //   const result = {
  //     code: null,
  //     message: '',
  //   }
  //   return editPublish(req).then(res => {
  //     if (res.length === 0) {
  //       result.code = 201
  //       result.message = '修改失败'
  //       return result
  //     } else {
  //       result.code = 200
  //       result.message = '修改成功'
  //       return result
  //     }
  //   })
  // },
  // home:async (req) => {
  //   const result = {
  //     code: null,
  //     message: '',
  //   }
  //   return editHome(req).then(res => {
  //     if (res.length === 0) {
  //       result.code = 201
  //       result.message = '修改失败'
  //       return result
  //     } else {
  //       result.code = 200
  //       result.message = '修改成功'
  //       return result
  //     }
  //   })
  // },
  deleteCate:async (req) => {
    const result = {
      code: null,
      message: '',
    }
    return removeCateById(req).then(res => {
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
module.exports = CateService