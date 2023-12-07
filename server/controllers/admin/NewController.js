const NewService = require("../../services/admin/NewService")
const NewController = {
  add:async (req, res) => {
    const result = await  NewService.addNew({req})
    res.send({
      data:result
    })  
  },
  get:async (req, res) => {
    const result = await  NewService.getNew(req)
    res.send({
      data:result
    })
  }
}
module.exports = NewController