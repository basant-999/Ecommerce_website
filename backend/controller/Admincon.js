const Adminmodel = require("../model/Adminmodel")
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

module.exports={
    Adminlogin
}