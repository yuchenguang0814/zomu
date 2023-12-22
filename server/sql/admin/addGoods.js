const { exec} = require('../../db/mysql');

const addGoods = (data)=>{
  const path = `/proUploads/${data.file.filename}`
  console.log(data.body)
  let sql = `insert into goods values (null,'${data.body.goods_cat}','${path}','${data.body.goods_name}','${data.body.goods_overview}','${data.body.goods_advantage}','${data.body.goods_content}','${data.body.goods_key}','${data.body.goods_description}','${data.body.goods_ishome}','${data.body.goods_sort}',NOW(),'${data.body.vidurl}','${data.body.isPublish}')`;
  return exec(sql);
}
module.exports ={
  addGoods
}