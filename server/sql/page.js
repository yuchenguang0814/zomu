const { exec} = require('../db/mysql');

const getPageList = () => {
  let sql = `select * from page ORDER BY id`;
  return exec(sql);
}
const getPageById = (req) => {
  let sql = `select * from page WHERE id = ${req.params.id}`;
  return exec(sql);
}
const getPageChildListId = (req) => {
  let sql = `select * from category WHERE cid = ${req.pid}`;
  return exec(sql);
}
const getCategory = () => {
  let sql = `select * from category ORDER BY pagePath`;
  return exec(sql);
}
const editPageById = (req) => {
  let sql = `UPDATE page SET pageName = '${req.body.pageName}',pageTitleImage = '${req.body.pageTitleImage}',pageDescription = '${req.body.pageDescription}',pageKey = '${req.body.pageKey}' WHERE id = ${req.body.id}`;
  return exec(sql);
} 
const editPageChildInfoById = (req) => {
  let sql = `UPDATE category SET pageDescription = '${req.pageDescription}',pageImage = '${req.pageImage}',pageKey = '${req.pageKey}' WHERE cid = ${req.cid}`;
  return exec(sql);
}
const getUser = (req) => {
  let sql = `select * from users where user_id = 1`
  return exec(sql)
}
module.exports ={
  getPageList,
  getCategory,
  getPageById,
  editPageById,
  getPageChildListId,
  editPageChildInfoById,
  getUser
}