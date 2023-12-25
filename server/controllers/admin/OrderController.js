const OrderService = require("../../services/admin/OrderService.js")
const OrderController = {
  // add:async (req, res) => {
  //   const result = await  OrderService.addOrder({req})
  //   res.send({
  //     data:result
  //   })  
  // },
  get:async (req, res) => {
    const result = await  OrderService.getOrder(req)
    res.send({
      data:result
    })
  },
  // edit:async (req, res) => {
  //   const result = await  OrderService.editOrder({req})
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
  // editHome:async (req, res) => {
  //   const result = await  ProService.home(req)
  //   res.send({
  //     data:result
  //   })
  // },
  delete:async (req, res) => {
    const result = await  OrderService.deleteOrder(req)
    res.send({
      data:result
    })
  },
}
module.exports = OrderController