

const { editUserLogo } = require("../../sql/admin/user")
const UploadService = {
  editlogo: async(req)=> {
    const result = {
      code: null,
      message: '',
      data: ''
    }
    return editUserLogo(req).then(res=> {
      const path = `/userUploads/${req.req.file.filename}`
      if (res.length === 0) {
        result.code = 201
        result.message = '修改logo失败'
        
        return result
      } else {
        result.code = 200
        result.message = '修改logo成功'
        result.data = path
        return result
      }
    })
  }
}
module.exports = UploadService