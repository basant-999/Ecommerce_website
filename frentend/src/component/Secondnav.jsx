import React, { useContext, useEffect } from 'react'
import "../css/secondnav.css"
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Base_url from '../config/Baseurl';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { mycontext } from '../Contex';
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";


const Secondnav = () => {

  //===================================home page single search=====================
        // const [singleSearch,Setsinglesearch] = useState("")
        const [result,Setresult] = useState([])
        const handleSearch=async(e)=>{
          const searchValue = e.target.value;
          if(!searchValue){
            return Setresult([]);
          }
          try {
          let api = `${Base_url}admin/singlesearch?que=${searchValue}`
            const respone = await axios.get(api)
            console.log(respone.data)
            Setresult(respone.data)
          } catch (error) {
            console.log(error)
          }
          
        }

        
  //===================================home page
   const [adminid,Setadminid] = useState("")
   const [password,Setpassword] = useState("")
   const product = useSelector(state=>state.mycard.card)
   const proLenght = product.length;
   
   const navigate = useNavigate()

   const{setLogedIn,uname,uemail,setuemail,setUname} = useContext(mycontext);

     const handlesubmit=async(e)=>{
      e.preventDefault()
  
      try {
        let api = `${Base_url}admin/adminlogin`
        const respon = await  axios.post(api,{adminid:adminid,password:password})
        console.log(respon)
        localStorage.setItem("adminid",respon.data.adminid)
        localStorage.setItem("adminname",respon.data.adminname)
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

  const logout=()=>{
    localStorage.clear()
    setuemail("");
    setUname("");
    setLogedIn(false)

    navigate("/")
  }
 
 
  return (
   <>
     <section id='secondnav'>

          <div id='LRC'> 
                <span id='loreg'>
                  <button id='lr' onClick={()=>{navigate("/login")}}>Login</button>
                  <button id='lr' onClick={()=>{navigate("/regist")}}>Register</button>   </span> 
                <span> <button id='card' onClick={()=>{navigate("/cardinter")}}><FaShoppingCart id='shopingcard' /> | cart {proLenght}</button> </span> 
          </div>
          {/* ===============================================home page single search================================= */}
          <div id='search'>

              <IoSearch id='sect'  />
              <input placeholder='Search for Products, Brand and More' class="input"  onChange={handleSearch}  />
              <FaMicrophone id='searchicon'/>
             
            
          </div>
          <div style={{width:"400px",height:"max-content"}} id='showSearch'>
              {
                result.map((e)=>{
                  return(
                    <>
                      <tr>
                        <td style={{cursor:"pointer"}} onClick={()=>navigate(`/productdetails/${e._id}`)}>{e.name}</td>
                      </tr>
                    </>
                  )
                })
              }
             
            </div>
  {/* =================================================================== */}
           <div id='adDrop'> 
            <span id='admin'>   <button id='lr'  onClick={handleShow}>admin</button> </span>

          
           <button style={{backgroundColor:" #222B3F",border:"none"}}>
           
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                {/* {localStorage.getItem("username")} */}
                {uname}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">{uemail}</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={logout}>logout</Dropdown.Item>
                
                </Dropdown.Menu>
              </Dropdown>
          </button>

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