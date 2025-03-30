const express = require("express")
const route = express.Router()
const adminController = require("../controller/Admincon")

route.post("/adminlogin",adminController.Adminlogin)

module.exports = route