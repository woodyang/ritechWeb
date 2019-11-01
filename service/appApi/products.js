const Koa = require('koa')
const app = new Koa()
const Router = require ('koa-router')
let router = new Router()

const mongoose = require('mongoose')
//const fs = require('fs')
//
//
//router.get('/upload',async(ctx)=>{
// 
//   fs.readFile('./products.json','utf8',(err,data)=>{
//      data=JSON.parse(data)
//      let saveCount=0
//      const Products = mongoose.model('Products')
//      data.map((value,index)=>{
//          let newProducts = new Products(value)
//          newProducts.save().then(()=>{
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
//
//})

router.post('/',async(ctx)=>{
    let productId = ctx.request.body.productId;
    const Products = mongoose.model('Products')
    await Products.findOne({productId:productId}).exec()
    .then(async(result)=>{  
        ctx.body={code:200,data:result}
    })
    .catch(error=>{
        console.log(error)
        ctx.body={code:500,data:error}
    })
})

module.exports=router;