const Adminmodel = require("../model/Adminmodel")
const productModel =require("../model/Productmodel")
const Adminlogin =async(req,res)=>{
     const {adminid,password} = req.body;
    
    
     const mydata = await Adminmodel.findOne({adminid:adminid})
    //  console.log(mydata);
     if(!mydata){
       return res.status(400).send({msg:"invalid admin"})
     }
     
     if(mydata.password != password){
        return res.status(404).send({msg:"invalid password"})
     }

     res.status(200).send({msg:"succussfully login",adminid:mydata._id})
    
}

const Datainsert=async(req,res)=>{
  console.log(req.files)
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
}

const showprodu =async(req,res)=>{
  const pro = await productModel.find()
  res.status(200).send(pro)
   
} 

module.exports={
    Adminlogin,
    Datainsert,
    showprodu
}