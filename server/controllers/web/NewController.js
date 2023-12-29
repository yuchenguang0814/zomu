const NewService = require("../../services/web/NewService.js")
const NewController = {
  get:async (req, res) => {
    const result = await  NewService.getNew(req)
    res.send({
      data:result
    })
  },
  getPage:async (req, res) => {
    const result = await  NewService.getPageNew(req)
    res.send({
      data:result
    })
  },
}
module.exports = NewController