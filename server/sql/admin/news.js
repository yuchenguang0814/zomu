const { exec} = require('../../db/mysql');
const getNewsList = (req) => {
  // const page = req.pagenum
  // const size = req.pagesize
  // const offset = (page-1)*size
  // let where = '1 = 1'
  // if(req.query != '') {
  //   const obj = JSON.parse(req.query)
  //   if(obj.cid) {
  //     where = where + ' and news.cid =' + obj.cid
  //   }
  // }
  // let sql = `SELECT * FROM news Where ${where} ORDER BY createtime DESC limit ${offset},${size}`
  const _id = req.id 
  let where = '1 = 1'
  if(_id) {
    where = where + ' and news.id =' + _id
  }
  let sql = `SELECT * FROM news Where ${where} ORDER BY createtime DESC`
  return exec(sql);
}
const editPublish = (req) => {
  let sql = `UPDATE news SET isPublish = '${req.body.isPublish}' WHERE id = ${req.body._id}`
  return exec(sql);
}

const getTotal = (req) => {
  let where = '1 = 1'
  if(req.query != '') {
    const obj = JSON.parse(req.query)
    if(obj.cid) {
      where = where + ' and news.cid =' + obj.cid
    }
  }
  let sql = `SELECT count(1) as num FROM news  Where ${where}`
  return exec(sql);
}
const addNews = (req) => {
  const path = `/newUploads/${req.file.filename}`
  let sql = `insert into news values (null,null,'${req.body.title}','${req.body.pageKey}','${req.body.pageDescription}','${req.body.author}',NOW(),'${req.body.content}',0,'${path}')`;
  return exec(sql);
}
const getNew = (req) => {
  let sql = `SELECT * FROM news Where id = ${req.id}`
  return exec(sql);
}
const editNewById = (req) => {
  let sql = `UPDATE news SET cid = '${req.cid}',title = '${req.title}',pageKey = '${req.pageKey}',pageDescription = '${req.pageDescription}',author = '${req.author}',content = '${req.content}' WHERE id = ${req.id}`
  return exec(sql);
}
const removeNewById = (req) => {
  let sql = `DELETE FROM news WHERE id = ${req.params.id}`  
  return exec(sql);
}
const getVideosList = (req) => {
  const page = req.pagenum
  const size = req.pagesize
  const offset = (page-1)*size
  let sql = `SELECT * FROM video ORDER BY createtime DESC limit ${offset},${size}`
  return exec(sql);
}
const getVTotal = (req) => {  
  let where = '1 = 1'
  if(req.query != '') {
    const obj = JSON.parse(req.query)
    if(obj.cid) {
      where = where + ' and news.cid =' + obj.cid
    }
  }
  let sql = `SELECT count(1) as num FROM video`
  return exec(sql);
}
const addVideos = (req) => {
  let sql = `insert into video values (null,${req.vidurl},'${req.imgurl}','${req.title}','${req.pageKey}','${req.pageDescription}',null)`;
  return exec(sql);
}
const removeVidById = (req) => {
  let sql = `DELETE FROM video WHERE id = ${req}`  
  return exec(sql);
}
const getVideo = (req) => {
  let sql = `SELECT * FROM video Where id = ${req.id}`
  return exec(sql);
}
const editVideoById = (req) => {
  let sql = `UPDATE video SET vidurl = '${req.vidurl}',imgurl = '${req.imgurl}',title = '${req.title}',pageKey = '${req.pageKey}',pageDescription = '${req.pageDescription}' WHERE id = ${req.id}`
  return exec(sql);
}
module.exports ={
  getNewsList,
  getTotal,
  addNews,
  getNew,
  editNewById,
  removeNewById,
  getVideosList,
  getVTotal,
  addVideos,
  removeVidById,
  getVideo,
  editVideoById,
  editPublish
}
