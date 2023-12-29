const { exec } = require('../db/mysql')
const getAllNew = (req) => {
  let size = 6
  let offset = 0
  let where = '1 = 1'
  // if(!req) {
  //   console.log(1)
  // } else {
  //   const query = JSON.parse(req.id)
  //   offset = (query.page - 1) * size
  // }
  let sql = `SELECT * FROM news where ${where} and isPublish = 1 ORDER BY createtime limit ${offset},${size}`
  // let sql = `SELECT * FROM goods Where  isPublish = 1 ORDER BY sort limit ${offset},${size}`
  console.log(sql)
  return exec(sql)
}
const getPageNewById = (req) => {
  let size = 6
  let offset = 0
  let where = '1 = 1'
  offset = (req.params.page - 1) * size
  let sql = `SELECT * FROM news where ${where} and isPublish = 1 ORDER BY createtime limit ${offset},${size}`
  console.log(sql)
  return exec(sql)
}
const getTotalNew = () => {
  let sql = `SELECT count(1) as num FROM news  where isPublish = 1`
  return exec(sql)
}
const getNew = (req) => {
  let sql = `SELECT * FROM news where cid = ${req.cid}`
  return exec(sql)
}
const getNewById = (req) => {
  let sql = `SELECT * FROM news where id = ${req.params.id} and isPublish = 1`
  return exec(sql)
}
const getPreNew = (req) => {
  let sql = `select * from news where id = (select MAX(id) from news where id < ${req.id})`
  return exec(sql)
}
const getNextNew = (req) => {
  let sql = `select * from news where id = (select MIN(id) from news where id > ${req.id})`
  return exec(sql)
}
const getAllVids = () => {
  let sql = `SELECT * FROM video`
  return exec(sql)
}
const getVid = (req) => {
  let sql = `SELECT * FROM video where id =${req.id}`
  return exec(sql)
}

module.exports = {
  getAllNew,
  getNew,
  getNewById,
  getPreNew,
  getNextNew,
  getAllVids,
  getVid,
  getTotalNew,
  getPageNewById
}