var express = require('express');
const OrderController = require('../../controllers/admin/OrderController')
var OrderRouter = express.Router();
OrderRouter.delete('/admin/order/delete/:id',OrderController.delete)
OrderRouter.get('/admin/order/getorder',OrderController.get)
module.exports = OrderRouter;