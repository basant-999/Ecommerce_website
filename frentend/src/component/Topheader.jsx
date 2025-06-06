import React from 'react'
import logo from "../images/toplogo.png"
import bike  from "../images/bike.png"
import "../css/topheader.css"
import { IoLocationSharp } from "react-icons/io5";


const Topheader = () => {
  return (
   <>
     <section id='tophead'>
          <div id='flogo'>
           
            <img src={logo}  height="40px" alt="" />
           <span id='underlined-custom'> Choose location <IoLocationSharp />  </span>
           
          </div>
          <div>
            <span id='down'>
            Download App |
            </span>
            <img src={bike} alt="" /> 
            <span id='time'> 
            Next available delivery slot: 28th Mar 01:00 PM - 04:00 PM
             
            </span>

          </div>
     </section>
   </>
  )
}

export default Topheader