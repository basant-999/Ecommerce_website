const express = require("express")
const route = express.Router()
const adminController = require("../controller/Admincon")
const upload = require("../middleweare/multer")



route.post("/adminlogin",adminController.Adminlogin)
route.post("/insertdata",upload.array("upload",5),adminController.Datainsert)
route.get("/showproduct",adminController.showprodu)
route.get("/getcustomerorder",adminController.getOrder)
route.get("/singlesearch",adminController.Singleserch)  //this api to home single search
module.exports = route