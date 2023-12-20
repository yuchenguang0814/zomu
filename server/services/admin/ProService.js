// const { addNews,getNewsList,editPublish,removeNewById,editNewById } = require("../../sql/admin/news");
const { getGoodsCate } = require("../../sql/admin/goodsCate")
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
  
  // addNew:async (req) => {
  //   const result = {
  //     code: null,
  //     message: ''
  //   }
  //   const data = req.req
  //   return addNews(data).then(res => {
  //     if (res.length === 0) {
  //       result.code = 201
  //       result.message = '添加案例失败'
  //       return result
  //     } else {
  //       result.code = 200
  //       result.message = '添加案例成功'
  //       return result
  //     }
  //   })
  // },
  // editNew:async (req) => {
  //   const result = {
  //     code: null,
  //     message: ''
  //   }
  //   const data = req.req
  //   return editNewById(data).then(res => {
  //     if (res.length === 0) {
  //       result.code = 201
  //       result.message = '更新案例失败'
  //       return result
  //     } else {
  //       result.code = 200
  //       result.message = '更新案例成功'
  //       return result
  //     }
  //   })
  // },
  // getNew:async (req) => {
  //   const result = {
  //     code: null,
  //     message: '',
  //     data: ''
  //   }
  //   if(!req.params.id) {
  //     return getNewsList(req).then(res => {
  //       if (res.length === 0) {
  //         result.code = 201
  //         result.message = '获取案例列表失败'
  //         return result
  //       } else {
  //         result.code = 200
  //         result.message = '获取案例列表成功'
  //         result.data = JSON.parse(JSON.stringify(res))
  //         return result
  //       }
  //     })
  //   } else {
  //     return getNewsList(req.params).then(res => {
  //       if (res.length === 0) {
  //         result.code = 201
  //         result.message = '获取案例失败'
  //         return result
  //       } else {
  //         result.code = 200
  //         result.message = '获取案例成功'
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
  // deleteNew:async (req) => {
  //   const result = {
  //     code: null,
  //     message: '',
  //   }
  //   return removeNewById(req).then(res => {
  //     if (res.length === 0) {
  //       result.code = 201
  //       result.message = '删除失败'
  //       return result
  //     } else {
  //       result.code = 200
  //       result.message = '删除成功'
  //       return result
  //     }
  //   })
  // }
  
}
module.exports = ProService