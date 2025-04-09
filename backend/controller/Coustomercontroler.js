const custModel = require("../model/cusModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const customerController =async(req,res)=>{
     const{name, password, email, state, address, city}  = req.body;

       try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt)
        const respo = await custModel.create({
           name:name,
           city:city, 
           address:address,
           state:state,
           email:email,
           password:hashPassword
        })
        res.status(200).send({msg:"complate registration"})
        
       } catch (error) {
        console.log(error)
       }
}

const userlogin=async(req,res)=>{
     const{email, password}=req.body;
     try {
        const user = await custModel.findOne({email:email})
        if(!user){
            res.status(200).send({msg:"invalid email"})
        }

        const matchpass = await bcrypt.compare(password,user.password)
        if(!matchpass){
            res.status(200).send({msg:"invalid password"})
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})

        res.status(200).send({token:token})
     } catch (error) {
        console.log(error)
     }
      
}

const Authenticate=async(req,res)=>{
    //  console.log(req.headers)
    const{authorization}=req.headers
    const token = authorization.split(" ")[1];

    try {
        const decodedToken =  jwt.verify(token, process.env.JWT_SECRET)
        // console.log(decodedToken.id)
        const coustome = await custModel.findById(decodedToken.id).select("-password")
        console.log(coustome)
        res.status(200).send(coustome)
    } catch (error) {
        console.log(error)
    }

   
}

module.exports = {
    customerController,
    userlogin,
    Authenticate
} 