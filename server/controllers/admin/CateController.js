const CateService = require("../../services/admin/CateService.js")
const CateController = {
  getCategory:async (req, res) => {
    const result = await  CateService.getCate(req)
    res.send({
      data:result
    })
  },
  add:async (req, res) => {
    const result = await  CateService.addCate({req})
    res.send({
      data:result
    })  
  },
  get:async (req, res) => {
    const result = await  CateService.getCate(req)
    res.send({
      data:result
    })
  },
  edit:async (req, res) => {
    const result = await  CateService.editCate({req})
    res.send({
      data:result
    })  
  },
  // editPublish:async (req, res) => {
  //   const result = await  ProService.publish(req)
  //   res.send({
  //     data:result
  //   })
  // },
  // editHome:async (req, res) => {
  //   const result = await  ProService.home(req)
  //   res.send({
  //     data:result
  //   })
  // },
  delete:async (req, res) => {
    const result = await  CateService.deleteCate(req)
    res.send({
      data:result
    })
  },
}
module.exports = CateController