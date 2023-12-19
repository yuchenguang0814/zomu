const UploadService = require("../../services/admin/UploadService")
const JWT = require('../../util/JWT')
const UploadController = {
  upload: async (req, res) => {
    const token = req.headers['authorization'].split(" ")[1]
    var payload = JWT.verify(token)
    const result = await UploadService.editlogo({_id:payload._id,req})
    res.send({
      data:result
    })  
  },
  editupload:async (req, res) => {
    const path = `/Uploads/${req.file.filename}`
    res.send({
      data:{
        "errno": 0, // 注意：值是数字，不能是字符串
        "data": {
            "url": path, // 图片 src ，必须
            "alt": "yyy", // 图片描述文字，非必须
            "href": "zzz" // 图片的链接，非必须
        }
    }
    })  
  }
}
module.exports = UploadController