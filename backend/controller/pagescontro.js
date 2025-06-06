const Productmodel = require("../model/Productmodel")

const Novages =async(req,res)=>{
    try {
        const response = await Productmodel.find()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send(error)
    }
}

 const Veg=async(req,res)=>{
    try {
        const response = await Productmodel.find()
        res.status(200).send(response)
    } catch (error) {
        res.send(error)
    }
 }

 const Fruitveges=async(req,res)=>{
    try {
        const response = await Productmodel.find()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send(error)
        
    }
 }

   const Personalcare =async(req,res)=>{
    try {
        const response = await Productmodel.find()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send(error)
    }
   }

   const Dairybacry=async(req,res)=>{
    try {
        const response = await Productmodel.find()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send(error)

    }
   }

module.exports ={
    Novages,
    Veg,
    Fruitveges,
    Personalcare,
    Dairybacry
}