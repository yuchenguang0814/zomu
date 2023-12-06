const UploadService = require("../../services/admin/UploadService")
const JWT = require('../../util/JWT')
const UploadController = {
  upload: async (req, res) => {
    const token = req.headers['authorization'].split(" ")[1]
    var payload = JWT.verify(token)
    const result = await  UploadService.editlogo({_id:payload._id,req})
    res.send({
      data:result
    })  
  }
}
module.exports = UploadController