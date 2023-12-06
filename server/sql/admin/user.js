const { exec} = require('../../db/mysql');
const md5 = require('blueimp-md5');
const md5random = 'yWycs';

const editUsers = (req) => {
  const data = req.req.body
  
  // 
  let sql = `UPDATE users SET userEmail = '${data.userEmail}',userPhone = '${data.userPhone}',userQQ = '${data.userQQ}',companyName = '${data.companyName}',companyAddress = '${data.companyAddress}' WHERE user_id = ${req._id}`
  return exec(sql);
}
const getPass = (req) => {
  let sql = `select password from users where user_id = ${req._id}`;
  return exec(sql);
}
const editUserPass = (req) => {
  const data = req.req.body
  const password = md5(md5(data.pass))+md5random
  let sql = `UPDATE users SET password = '${password}' WHERE user_id = ${req._id}`
  return exec(sql);
}
const editUserLogo = (req, path) => {
  let sql = `UPDATE users SET logo = '${path}' WHERE user_id = ${req._id}`
  return exec(sql);
}
module.exports ={
  editUsers,editUserPass,getPass,editUserLogo
}