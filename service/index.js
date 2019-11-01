const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
//let user = require('./appApi/user.js')
let products = require('./appApi/products.js')
let news = require('./appApi/news.js')

let router = new Router();
//router.use('/user',user.routes())
router.use('/products',products.routes())
router.use('/news',news.routes())

//立即执行函数
;(async () =>{
    await connect()
    initSchemas()
//  const User = mongoose.model('User')
//  let oneUser = new User({userName:'wooooood',password:'123456'})
//
//  oneUser.save().then(()=>{
//      console.log('插入成功')
//      
//  })
//let  users = await  User.findOne({}).exec()
//7
//console.log('------------------')
//console.log(users)
//console.log('------------------')  
})()

app.use(cors({
    origin: function (ctx) {
        // if (ctx.url === '/test') {
//          return "*"; // 允许来自所有域名请求
        // }
           return "http://localhost:8080"; // 这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true, // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
app.use(bodyParser());
app.use(router.routes())
app.use(router.allowedMethods())

   
app.use(async(ctx)=>{
    ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
})