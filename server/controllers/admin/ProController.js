const ProService = require("../../services/admin/ProService.js")
const ProController = {
  getCategory:async (req, res) => {
    const result = await  ProService.getCate(req)
    res.send({
      data:result
    })
  },
  add:async (req, res) => {
    const result = await  ProService.addPro({req})
    res.send({
      data:result
    })  
  },
  get:async (req, res) => {
    const result = await  ProService.getPro(req)
    res.send({
      data:result
    })
  },
  getProc:async (req, res) => {
    const result = await  ProService.getProBycid(req)
    res.send({
      data:result
    })
  },
  edit:async (req, res) => {
    const result = await  ProService.editPro({req})
    res.send({
      data:result
    })  
  },
  editPublish:async (req, res) => {
    const result = await  ProService.publish(req)
    res.send({
      data:result
    })
  },
  editHome:async (req, res) => {
    const result = await  ProService.home(req)
    res.send({
      data:result
    })
  },
  delete:async (req, res) => {
    const result = await  ProService.deletePro(req)
    res.send({
      data:result
    })
  },
}
module.exports = ProController