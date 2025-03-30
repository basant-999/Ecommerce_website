import React from 'react'
import "../css/dashboard.css"
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
     const navigate = useNavigate()

    const loginsub =()=>{
       localStorage.clear()
       navigate("/")
    }

    const insert=()=>{
      navigate("insertdata")
    }
    
   
  return (
  <>
   <div id='top'>
     welcome to admin dashboard
   </div>
   <div id='second'>
    <h2>adminId {localStorage.getItem("adminid")}</h2>
    <button onClick={loginsub}>logout</button>
   </div>
    <section id='feilds'>
        <button onClick={insert} >insert data</button>  <br /> <br />
        <button>sales</button> <br /> <br />
        <button>information</button>
    </section>
    <Outlet/>
  </>
  )
}

export default Dashboard