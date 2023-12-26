const { exec} = require('../../db/mysql');

const getGoodsCate = ()=>{
  let sql = `SELECT * FROM category WHERE pageId = 1 ORDER BY pagePath`
  return exec(sql);
}

const addCate = (data)=>{
  const path = `/cateUploads/${data.file.filename}`
  const pageDescription = req.body.pageDescription.replace(/\'/g, "''")
  let sql = `insert into category values (null,'${data.body.pageId}','${data.body.pageName}','${data.body.pagePath}','${path}','${data.body.pageTitleImage}','${pageDescription}','${data.body.pageKey}')`;
  return exec(sql);
}
const getCateById = (req) => {
  let sql = `SELECT * FROM category WHERE cid = ${req.params.id} ORDER BY pagePath`
  return exec(sql);
}
const editGoodById = (req) => {
  const pageDescription = req.body.pageDescription.replace(/\'/g, "''")
  if(req.file) {
    const path = `/cateUploads/${req.file.filename}`
    let sql = `UPDATE category SET pageName = '${req.body.pageName}',pagePath = '${req.body.pagePath}',pageImage = '${path}',pageDescription = '${pageDescription}',pageKey = '${req.body.pageKey}' WHERE cid = ${req.body.cid}`
    return exec(sql);
  } else {
    let sql = `UPDATE category SET pageName = '${req.body.pageName}',pagePath = '${req.body.pagePath}',pageDescription = '${pageDescription}',pageKey = '${req.body.pageKey}' WHERE cid = ${req.body.cid}`
    console.log(sql)
    return exec(sql);
  }
}
const removeCateById = (req) => {
  let sql = `DELETE FROM category WHERE cid = ${req.params.id}`  
  return exec(sql);
}
module.exports ={
  getGoodsCate,
  addCate,
  getCateById,
  editGoodById,
  removeCateById
}
