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
  },
  editPublish:async (req, res) => {
    const result = await  NewService.publish(req)
    res.send({
      data:result
    })
  },
  delete:async (req, res) => {
    const result = await  NewService.deleteNew(req)
    res.send({
      data:result
    })
  },
}
module.exports = NewController