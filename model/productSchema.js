const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    imageURL:{type:String,required:true}, 
    price:{type:Number,required:true},
    name:{type:String,required:true},
    descripton:{type:String,required:true}})
module.exports= mongoose.model('Product',productSchema);