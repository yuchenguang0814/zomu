const { getProductIsHome } = require("../../sql/product")
const ProService = {
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
  
}
module.exports = ProService