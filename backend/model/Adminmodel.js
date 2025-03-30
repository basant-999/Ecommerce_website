 const mongoose = require("mongoose")
 const Adminmodel = new mongoose.Schema({
     name:String,
     adminid:String,
     password:String
 })
 module.exports = mongoose.model("admin",Adminmodel)