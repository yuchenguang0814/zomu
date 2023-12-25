const { exec } = require('../db/mysql')

const getProductsByCid = (req) => {
  const id = req.query.id
  let sql = `SELECT * FROM goods where c_id = ${id}`
  return exec(sql)
} 
const getProduct = (req) => {
  const id = req.query.id
  let sql = `SELECT * FROM goods where id = ${id}`
  return exec(sql)
} 
const getAllGood = () => {
  let sql = `SELECT * FROM goods`
  return exec(sql)
}
const getProductIsHome = (req) => {
  let sql = `SELECT * FROM goods where isHome = 1 ORDER BY sort`
  return exec(sql)
} 
module.exports = {
  getProductsByCid,
  getProduct,
  getAllGood,
  getProductIsHome
}
