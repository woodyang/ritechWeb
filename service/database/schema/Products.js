const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema          //声明Schema
let ObjectId = Schema.Types.ObjectId    //声明Object类型

//创建产品信息的Schema
const productSchema = new Schema({
    productId:{unique:true,type:String},
    productName:String,
    productImgUrl:Array,
    productDetail:Object

},{
    collection:'Products'
})

//发布模型
mongoose.model('Products',productSchema)