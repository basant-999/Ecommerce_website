import React from 'react'
import "../css/secondnav.css"
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Base_url from '../config/Baseurl';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Secondnav = () => {
   const [adminid,Setadminid] = useState("")
   const [password,Setpassword] = useState("")
   const navigate = useNavigate()

     const handlesubmit=async(e)=>{
      e.preventDefault()
  
      try {
        let api = `${Base_url}admin/adminlogin`
        const respon = await  axios.post(api,{adminid:adminid,password:password})
        console.log(respon)
        localStorage.setItem("adminid",respon.data.adminid)
        setShow(false)
        alert(respon.data.msg)
        navigate("/dashboard")
        
      } catch (error) {
        console.log(error.response.data.msg)
        alert(error.response.data.msg)
      }
     }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>
     <section id='secondnav'>
          <div>
            <input   />
          </div>
           <div>
              <button id='lr'>login</button>
              <button id='lr'>register</button>
              <button id='card'><FaShoppingCart />|cart</button>
              <button id='lr'  onClick={handleShow}>admin</button>
           </div>
     </section>

     {/* ============================ model ======================== */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin model</Modal.Title>
        </Modal.Header>
       
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter ID</Form.Label>
        <Form.Control type="email" placeholder="Enter admin id" value={adminid} onChange={(e)=>{Setadminid(e.target.value)}} />
        <Form.Text className="text-muted">
          We'll never share your ID with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>{Setpassword(e.target.value)}}/>
      </Form.Group>
    
      <Button variant="primary" type="submit" onClick={handlesubmit}>
        login
      </Button>
    </Form>
      </Modal>
   </>
  )
}

export default Secondnav