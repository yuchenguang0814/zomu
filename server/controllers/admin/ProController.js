const ProService = require("../../services/admin/ProService.js")
const ProController = {
  getCategory:async (req, res) => {
    const result = await  ProService.getCate(req)
    res.send({
      data:result
    })
  },
  // add:async (req, res) => {
  //   const result = await  ProService.addNew({req})
  //   res.send({
  //     data:result
  //   })  
  // },
  // get:async (req, res) => {
  //   const result = await  ProService.getNew(req)
  //   res.send({
  //     data:result
  //   })
  // },
  // edit:async (req, res) => {
  //   const result = await  ProService.editNew({req})
  //   res.send({
  //     data:result
  //   })  
  // },
  // editPublish:async (req, res) => {
  //   const result = await  ProService.publish(req)
  //   res.send({
  //     data:result
  //   })
  // },
  
  // delete:async (req, res) => {
  //   const result = await  ProService.deleteNew(req)
  //   res.send({
  //     data:result
  //   })
  // },
}
module.exports = ProController