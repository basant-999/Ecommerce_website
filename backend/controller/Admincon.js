const Adminmodel = require("../model/Adminmodel")
const productModel =require("../model/Productmodel")
const paymentmodel= require("../model/Paymentmodel")
const Adminlogin =async(req,res)=>{
     const {adminid,password} = req.body;
    try {
      const mydata = await Adminmodel.findOne({adminid:adminid})
     console.log(mydata);
     if(!mydata){
       return res.status(400).send({msg:"invalid admin"})
     }
     
     if(mydata.password != password){
        return res.status(404).send({msg:"invalid password"})
     }

     res.status(200).send({msg:"succussfully login",adminid:mydata._id,adminname:mydata.name})
    
    } catch (error) {
      res.status(404).send({msg:"sever error",error})
    }
    
     
}

const Datainsert=async(req,res)=>{
  try {
        // console.log(req.files)
  const   {feild,data, price, name}=req.body
  const imageUrls=req.files.map(file=>file.path);
  const product = await productModel.create({
    name:name,
    price:price,
    data:data, 
    feild:feild,
    defaultImage:imageUrls[0],
    images:imageUrls
  })
 res.status(200).send("save!!!!!!!!!!!!!!!!!!!")
    
  } catch (error) {
    res.status(400).send(error)
  }
 
}

const showprodu =async(req,res)=>{
  try {
       const pro = await productModel.find()
       res.status(200).send(pro)
    
  } catch (error) {
    res.status(400).send(error)
  }
 
   
} 

const getOrder=async(req,res)=>{
    const order =   await paymentmodel.find()
     try {
      res.status(200).send(order)
     } catch (error) {
      res.status(400).send(error)
      
     }
}

const Singleserch=async(req,res)=>{
    try {
        // console.log(req.query.que)
        const query = req.query.que;
        const products = await productModel.find({
          name: { $regex: query, $options: 'i' }
        })
     res.status(200).send(products)
    } catch (error) {
          res.status(400).send(error)
        }
 
}

module.exports={
    Adminlogin,
    Datainsert,
    showprodu,
    getOrder,
    Singleserch
}