const mongoose= require("mongoose");
const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    data:String, 
    feild:String,
    defaultImage:String,
    images:[String]

})

module.exports = mongoose.model("product", productSchema);