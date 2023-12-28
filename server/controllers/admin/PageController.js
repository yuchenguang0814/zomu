const PageService = require("../../services/admin/PageService.js")
const PageController = {
  get:async (req, res) => {
    const result = await  PageService.getPage(req)
    res.send({
      data:result
    })
  },
  edit:async (req, res) => {
    const result = await  PageService.editPage({req})
    res.send({
      data:result
    })  
  },
}
module.exports = PageController