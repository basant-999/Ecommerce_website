import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Base_url from '../config/Baseurl';
import {useNavigate} from "react-router-dom"
import { mycontext } from '../Contex';

const Login = () => {
  const navigate = useNavigate()
    const [email,Setemail] = useState("")
    const [password,Setpassword] = useState("")

    const{setLogedIn} = useContext(mycontext);
    
    const finalsubmit=async(e)=>{
       
          e.preventDefault()
         let api = `${Base_url}user/userLogin`

         try {
            const response = await axios.post(api,{email:email,password:password})
            console.log(response.data)
            localStorage.setItem("token",response.data.token)
            alert("successfully login")
            setLogedIn(true)
            navigate("/home");
            
         } catch (error) {
            console.log(error)
         }
    }
   
  return (
   <>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{Setemail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{Setpassword(e.target.value)}} />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={finalsubmit}>
        Submit
      </Button>
    </Form>
   </>
  )
}

export default Login