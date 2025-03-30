const mongoose = require("mongoose")
const dbConection = ()=>{
    try {
        mongoose.connect(process.env.DB_CONN).then(()=>{
            console.log("database connect sucessfullly")
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports ={
    dbConection
}