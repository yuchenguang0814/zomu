const { exec} = require('../../db/mysql');

const addGoods = (data)=>{
  const goods_overview = data.body.goods_overview.replace(/\'/g, "''")
  const goods_advantage =  data.body.goods_advantage.replace(/\'/g, "''")
  const goods_description = data.body.goods_description.replace(/\'/g, "''")
  const path = `/proUploads/${data.file.filename}`
  let sql = `insert into goods values (null,'${data.body.goods_cat}','${path}','${data.body.goods_name}','${goods_overview}','${goods_advantage}','${data.body.goods_content}','${data.body.goods_key}','${goods_description}','${data.body.goods_ishome}','${data.body.goods_sort}',NOW(),'${data.body.vidurl}','${data.body.isPublish}')`;
  return exec(sql);
}
module.exports ={
  addGoods
}