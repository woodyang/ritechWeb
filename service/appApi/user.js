const Router = require ('koa-router')
const mongoose = require('mongoose')
let router = new Router()
router.post('/',async(ctx)=>{
    let userName = ctx.request.body.userName;
    console.log(ctx.request.body)
    const User = mongoose.model('User')
    await User.findOne({userName:userName}).exec()
    .then(async(result)=>{  
        ctx.body={code:200,message:result}
    })
    .catch(error=>{
        console.log(error)
        ctx.body={code:500,message:error}
    })
})
router.post('/register',async(ctx)=>{
    //取得Model
    const User = mongoose.model('User')
    //把从前端接收的POST数据封装成一个新的user对象
    let newUser = new User(ctx.request.body)
    //用mongoose的save方法直接存储，然后判断是否成功，返回相应的结果
    await newUser.save().then(()=>{
        //成功返回code=200，并返回成功信息
        ctx.body={
            code:200,
            message:'注册成功'
        }
    }).catch(error=>{
         //失败返回code=500，并返回错误信息
        ctx.body={
            code:500,
            message:error
        }
    })
})
module.exports=router;