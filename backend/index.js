const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const adminRoute = require("./route/Adminroute")
const cors = require("cors")
const dbcon = require("./utils/db")
require("dotenv").config()



app.use(cors())
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

 dbcon.dbConection()

  app.use("/admin",adminRoute)

const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`server is running on  ${port} port`)
})