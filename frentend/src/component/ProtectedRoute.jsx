import { Navigate } from "react-router-dom"

Navigate

const ProtectedRoute = ({children}) => {
    const authent = localStorage.getItem("token")

    if(!authent){
    return <Navigate to="/"/>
    }
  return children

 
  
}

export default ProtectedRoute