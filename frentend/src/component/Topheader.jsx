import React from 'react'
import logo from "../images/toplogo.png"
import bike  from "../images/bike.png"
import "../css/topheader.css"
import { IoLocationSharp } from "react-icons/io5";

const Topheader = () => {
  return (
   <>
     <section id='tophead'>
          <div>
             <img src={logo} alt="" height="50px"/>
             choose location <IoLocationSharp />
          </div>
          <div>
            download app |
            <img src={bike} alt="" /> 
            Next available delivery slot: 28th Mar 01:00 PM - 04:00 PM

          </div>
     </section>
   </>
  )
}

export default Topheader