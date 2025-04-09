import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Base_url from '../config/Baseurl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Registration = () => {
  const navigate = useNavigate()
    const [input,Setinput] = useState({})

    const formsubmit=(e)=>{
        let name = e.target.name;
        let value= e.target.value;
        Setinput(values=>({...values,[name]:value}))
        console.log(input)
    }
    const finalsubmit=async(e)=>{
        e.preventDefault()
        let api = `${Base_url}user/userRegistration`
        try {
            const response = await axios.post(api,input)
            console.log(response.data)
            alert(response.data.msg)
            navigate("/")
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{

    },[])

  return (
   <>
      <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name' onChange={formsubmit} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User city</Form.Label>
        <Form.Control type="text" placeholder="Enter city" name='city' onChange={formsubmit} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" name='address' onChange={formsubmit}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User state</Form.Label>
        <Form.Control type="text" placeholder="state" name='state' onChange={formsubmit} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={formsubmit} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={formsubmit}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={finalsubmit}>
        Submit
      </Button>
    </Form>
   </>
  )
}

export default Registration