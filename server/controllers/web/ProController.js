const ProService = require("../../services/web/ProService.js")
const ProController = {
  getCategory:async (req, res) => {
    const result = await  ProService.getCate(req)
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
  getProsByIshome:async (req, res) => {
    const result = await  ProService.getProIshome(req)
    res.set('Access-Control-Allow-Origin', '*')
    res.send({
      data:result
    })
  },
}
module.exports = ProController