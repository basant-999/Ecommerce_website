import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Base_url from '../config/Baseurl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/registration.css"
const Registration = () => {
  const navigate = useNavigate()
    const [input,Setinput] = useState({})

    const formsubmit=(e)=>{
        let name = e.target.name;
        let value= e.target.value;
        Setinput(values=>({...values,[name]:value}))
        // console.log(input)
    }
    const finalsubmit=async(e)=>{
        e.preventDefault()
        let api = `${Base_url}user/userRegistration`
        try {
            const response = await axios.post(api,input)
            // console.log(response.data)
            alert(response.data.msg)
            navigate("/")
            
        } catch (error) {
            console.log(error)
        }
    }
    // useEffect(()=>{

    // },[])

  return (
   <>
     <div id='regis'>
      <Form id='focon'>
      <Form.Group className="mb-3" controlId="formBasicEmail" id='.fogroup '>
        <Form.Label id='labals'>User name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name' onChange={formsubmit} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail" id='.fogroup '>
        <Form.Label id='labals'>User city</Form.Label>
        <Form.Control type="text" placeholder="Enter city" name='city' onChange={formsubmit} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" id='.fogroup '>
        <Form.Label id='labals'>User address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" name='address' onChange={formsubmit}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail" id='.fogroup '>
        <Form.Label id='labals'>User state</Form.Label>
        <Form.Control type="text" placeholder="state" name='state' onChange={formsubmit} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" id='.fogroup '>
        <Form.Label id='labals'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={formsubmit} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" id='.fogroup '>
        <Form.Label id='labals'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={formsubmit}/>
      </Form.Group>
     
      <Button id='submitbtn' variant="primary" type="submit" onClick={finalsubmit}>
        Submit
      </Button>
    </Form>

    </div>
   </>
  )
}

export default Registration