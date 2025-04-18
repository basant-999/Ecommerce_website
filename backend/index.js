const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const adminRoute = require("./route/Adminroute")
const custRoute = require("./route/userRoute")
const pagesRoute = require("./route/Pagesroute")
const cors = require("cors")
const dbcon = require("./utils/db")
const path = require ("path")
const paymentRoute= require("./route/Payment")
require("dotenv").config()



app.use(cors())
app.use("/picture",express.static(path.join(__dirname,"picture")))


// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

 dbcon.dbConection()

app.use("/admin",adminRoute)
app.use("/user",custRoute)
app.use("/pages",pagesRoute)
// ==============================
app.use("/api/payment/",paymentRoute)

const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`server is running on  ${port} port`)
})