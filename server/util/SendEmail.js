const nodemailer = require('nodemailer')
  const SendEmail = {
    post:async (req, res) => {
      // const body = JSON.parse()
      
      console.log(req.body)
      var transporter = nodemailer.createTransport({ 
        service: 'qq', 
        auth: { 
         user: '546448821@qq.com', 
         pass: 'xxxuksxwzmpjbccc' //授权码,通过QQ获取 
        } 
        }); 
        var mailOptions = { 
         from: '546448821@qq.com', // 发送者 
         to: '2386054344@qq.com', // 接受者,可以同时发送多个,以逗号隔开 
         subject: '网站留言通知', // 标题 
         //text: 'Hello world', // 文本 
         html: `<h2>111</h2>`  
        }; 
      // transporter.sendMail(mailOptions, function (err, info) { 
      //   if (err) { 
      //    console.log(err); 
      //    return; 
      //   } 
      //   console.log('发送成功'); 
      //  })
    }
    
  }
  module.exports = SendEmail
  