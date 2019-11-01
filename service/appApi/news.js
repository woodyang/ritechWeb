const Koa = require('koa')
const app = new Koa()
const Router = require ('koa-router')
let router = new Router()

const mongoose = require('mongoose')
//const fs = require('fs')
//
//
//router.get('/uploadNews',async(ctx)=>{
// 
//   fs.readFile('./news.json','utf8',(err,data)=>{
//      data=JSON.parse(data)
//      let saveCount=0
//      const News = mongoose.model('News')
//      data.map((value,index)=>{
//          console.log(value)
//          let newNews = new News(value)
//          newNews.save().then(()=>{
//              saveCount++
//              console.log('成功'+saveCount)
//          }).catch(error=>{
//               console.log('失败：'+error)
//          })
//      })
//     
//      
//  })
//  ctx.body="开始导入数据"
//})

router.post('/',async(ctx)=>{
    let tag = ctx.request.body.tag;
    const News = mongoose.model('News')
    await News.find({tag:tag}).exec()
    .then(async(result)=>{  
        ctx.body={code:200,data:result}
    })
    .catch(error=>{
        console.log(error)
        ctx.body={code:500,data:error}
    })
})

module.exports=router;