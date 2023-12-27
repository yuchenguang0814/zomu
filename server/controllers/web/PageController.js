const PageService = require("../../services/web/PageService.js")
const PageController = {
  get:async (req, res) => {
    const result = await  PageService.getPage(req)
    res.send({
      data:result
    })
  },
}
module.exports = PageController