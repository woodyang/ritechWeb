const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema          //声明Schema
let ObjectId = Schema.Types.ObjectId    //声明Object类型

//创建产品信息的Schema
const newsSchema = new Schema({
    title:String,
    titleCover:String,
    decs:String,
    updataTime:String,
    publisher:String,
    tag:String,
    newsBody:Array

},{
    collection:'news'
})

//发布模型
mongoose.model('News',newsSchema)