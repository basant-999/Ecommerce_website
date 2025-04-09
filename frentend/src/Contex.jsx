import React, { createContext, useState } from 'react'
const mycontext = createContext()

const Contex = ({children}) => {
    const [logedIn, setLogedIn]= useState(false);
    const [uname , setUname] = useState("");
    const [uemail , setuemail] = useState("");
  return (
    <>
     <mycontext.Provider value={{logedIn,setLogedIn,setuemail,setUname,uname,uemail}}>
        {children}

     </mycontext.Provider>
    </>
  )
}

export {mycontext}
export default Contex