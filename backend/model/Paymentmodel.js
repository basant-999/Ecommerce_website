const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema({

    name:String,
    totalamount:Number, 
    customername:String,
    address:String,
    city:String,
    email:String,
    dop:  {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model("order",orderSchema)