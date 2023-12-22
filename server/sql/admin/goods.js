const { exec} = require('../../db/mysql');

const getGoods = (req)=>{
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
  const _id = req.id 
  let where = '1 = 1'
  if(_id) {
    where = where + ' and goods.id =' + _id
  }
  let sql = `SELECT * FROM goods Where ${where} ORDER BY sort`
  return exec(sql);
}
const getTotal = (req) => {
  let where = '1 = 1'
  if(req.query.query != '') {
    const obj = JSON.parse(req.query.query)
    if(obj.cid) {
      where = where + ' and goods.c_id =' + obj.cid
    }
  }
  let sql = `SELECT count(1) as num FROM goods  Where ${where}`
  return exec(sql);
}
const getGoodsCate = () => {
  let sql = `SELECT cid,pageName FROM category WHERE pageId = 1 ORDER BY pagePath`
  return exec(sql);
}
const getGoodById = (req) => {
  let sql = `SELECT * FROM goods WHERE id = ${req.id}`
  return exec(sql);
}
const editGoodById = (req) => {
  if(req.file) {
    const path = `/proUploads/${req.file.filename}`
    let sql = `UPDATE goods SET c_id = '${req.body.c_id}',image = '${path}',name = '${req.body.name}',overView = '${req.body.overView}',advantage = '${req.body.advantage}',content = '${req.body.content}',pageKey = '${req.body.pageKey}',pageDescription = '${req.body.pageDescription}',add_time = NOW(),sort = ${req.body.sort},vidurl = '${req.body.vidurl}' WHERE id = ${req.body.id}`
    return exec(sql);
  } else {
    let sql = `UPDATE goods SET c_id = '${req.body.c_id}',name = '${req.body.name}',overView = '${req.body.overView}',advantage = '${req.body.advantage}',content = '${req.body.content}',pageKey = '${req.body.pageKey}',pageDescription = '${req.body.pageDescription}',add_time = NOW(),sort = ${req.body.sort},vidurl = '${req.body.vidurl}' WHERE id = ${req.body.id}`
    return exec(sql);
    console
  }
 
}
const removeGoodById = (req) => {
  let sql = `DELETE FROM goods WHERE id = ${req.params.id}`  
  return exec(sql);
}
const editPublish = (req) => {
  let sql = `UPDATE goods SET isPublish = '${req.body.isPublish}' WHERE id = ${req.body._id}`
  return exec(sql);
}
const editHome = (req) => {
  let sql = `UPDATE goods SET isHome = '${req.body.isHome}' WHERE id = ${req.body._id}`
  return exec(sql);
}
module.exports ={
  getGoods,
  getTotal,
  getGoodsCate,
  getGoodById,
  editGoodById,
  removeGoodById,
  editPublish,
  editHome
}