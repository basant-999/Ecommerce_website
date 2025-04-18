const express = require("express")
const route = express.Router()

const pagesController = require("../controller/pagescontro")

route.get("/nonveg", pagesController.Novages)
route.get("/veg",pagesController.Veg)
route.get("/fruitveges",pagesController.Fruitveges)
route.get("/personalcare",pagesController.Personalcare)
route.get("/dairybacry",pagesController.Dairybacry)
module.exports = route