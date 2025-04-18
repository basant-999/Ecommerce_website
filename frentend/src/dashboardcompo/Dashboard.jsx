import React from 'react'
import "../css/dashboard.css"
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
     const navigate = useNavigate()

    const loginsub =()=>{
       localStorage.clear()
       navigate("/")
    }

    // const insert=()=>{
    //   navigate("insertdata")
    // }
    
   
  return (
  <>
   <div id='top'>
     welcome to admin dashboard
   </div>
   <div id='second'>
    <h4>Admin Name: {localStorage.getItem("adminname")}</h4>
    <button onClick={loginsub}>logout</button>
   </div>
       <div id='dashboardherosection'>
              <section id='feilds'>
                <button id='dashBtn' onClick={()=>{navigate("insertdata")}} >Upload product</button>  <br /> <br />
                <button id='dashBtn' onClick={()=>{navigate("coustomerorder")}}>Customer Oders</button> <br /> <br />
                <button id='dashBtn'>Product manage</button>
                </section>
                    <section id='outletmanage'>
                      <div>
                        <Outlet/>
                      </div>
                       
                        
                    </section>
       </div>

  </>
  )
}

export default Dashboard