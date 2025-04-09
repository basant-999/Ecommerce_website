const express = require("express")
const route = express.Router()
const adminController = require("../controller/Admincon")
const upload = require("../middleweare/multer")



route.post("/adminlogin",adminController.Adminlogin)
route.post("/insertdata",upload.array("upload",5),adminController.Datainsert)
route.get("/showproduct",adminController.showprodu)
module.exports = route