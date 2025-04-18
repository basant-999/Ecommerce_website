const express = require("express");
const route = express.Router();
const customerController = require("../controller/Coustomercontroler")

route.post("/userRegistration",customerController.customerController)
route.post("/userlogin",customerController.userlogin)
route.get("/custauthenticate",customerController.Authenticate)
route.get("/getdata", customerController.custGetData);
route.post("/getProductDetails", customerController.getProductDetails);


module.exports = route
