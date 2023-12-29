const { exec } = require('../db/mysql')
const getGoodsBycid = (req)=>{
  // if(req.query != '') {
  //   const page = req.query.pagenum
  //   const size = req.query.pagesize
  //   const offset = (page-1)*size
  //   let where = '1 = 1'
  //   if(req.query.query != '') {
  //     const obj = JSON.parse(req.query.query)
  //     if(obj.cid) {
  //       where = where + ' and goods.c_id =' + obj.cid
  //     }
  //   }
  //   let sql = `SELECT * FROM goods Where ${where} ORDER BY sort limit ${offset},${size}`
  //   return exec(sql);
  // }
  // 
  const _id = req.id 
  let size = 4
  let offset = 0
  let where = '1 = 1'
  if(_id && _id !== 'all' && typeof(JSON.parse(req.id)) === 'object') {
    const query = JSON.parse(req.id)
    offset = (query.page - 1) * size
    if(query.id !== 'all'){
      where = where + ' and goods.c_id =' + query.id
    }
  } else if (_id !=='all') {
    offset = 0
    where = where + ' and goods.c_id =' + _id
  }
  if(offset == NaN) {
    offset = 0
  }
  let sql = `SELECT * FROM goods Where ${where} and isPublish = 1 ORDER BY sort limit ${offset},${size}`
  return exec(sql);
}
const getAllgoodsBycid = (req) => {
  const _id = req.id 
  let where = '1 = 1'
  if(_id && _id !== 'all' && typeof(JSON.parse(req.id)) === 'object') {
    const query = JSON.parse(req.id)
    if(query.id !== 'all'){
      where = where + ' and goods.c_id =' + query.id
    }
  } else if (_id !=='all') {
    where = where + ' and goods.c_id =' + _id
  }
  let sql = `SELECT count(1) as num FROM goods  Where ${where} and isPublish = 1`
  // let sql = `SELECT count(1) as num FROM goods`
  return exec(sql);
}
const getProductsByCid = (req) => {
  const id = req.query.id
  let sql = `SELECT * FROM goods where c_id = ${id} ORDER BY sort limit 4`
  return exec(sql)
} 
const getProduct = (req) => {
  const id = req.params.id
  let sql = `SELECT * FROM goods where id = ${id} and isPublish = 1 `
  return exec(sql)
} 
const getAllGood = () => {
  let sql = `SELECT * FROM goods where isPublish = 1 limit 4 ORDER BY sort`
  return exec(sql)
}
const getProductIsHome = (req) => {
  let sql = `SELECT * FROM goods where isHome = 1 ORDER BY sort`
  return exec(sql)
}
const getGoodsCate = ()=>{
  let sql = `SELECT * FROM category WHERE pageId = 1 ORDER BY pagePath`
  return exec(sql);
}
const getCateById = (req) => {
  if(req.params.id == 'all') {
    let sql = `SELECT * FROM page WHERE id = 1`
    return exec(sql);
  }else {
    let sql = `SELECT * FROM category WHERE cid = ${req.params.id}`
    return exec(sql);
  }
}
const getGoodsByName = (req) => {
  let sql = `SELECT * from goods where LOCATE('${req.params.searchInfo}', name) > 0 and isPublish = 1 limit 4 ORDER BY sort`;
  return exec(sql);
}
module.exports = {
  getProductsByCid,
  getProduct,
  getAllGood,
  getProductIsHome,
  getGoodsBycid,
  getGoodsCate,
  getCateById,
  getGoodsByName,
  getAllgoodsBycid
}
