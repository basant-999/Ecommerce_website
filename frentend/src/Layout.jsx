import React from 'react'
import Topheader from './component/Topheader'
import Secondnav from './component/Secondnav'
import Thirdnav from './component/Thirdnav'
import CoroHead from "./component/CoroHead"
import Footer from "./component/Footer"
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
 
    <>
       <Topheader/>
       <Secondnav/>
       <Thirdnav/>
       <CoroHead/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default Layout