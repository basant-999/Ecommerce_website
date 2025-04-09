import Dashboard from "./dashboardcompo/Dashboard"
import Inserdata from "./dashboardcompo/Inserdata"
import Layout from "./Layout"
import Cardinster from "./pages/Cardinster"
import Chekout from "./pages/Chekout"
import Home from "./pages/Home"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Registration from "./pages/Registration"
import Login from "./pages/Login"



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="cardinter" element={<Cardinster/>}/>
          <Route path="checkout" element={<Chekout/>}/>
          <Route path="regist" element={<Registration/>}/>
          <Route path="login" element={<Login/>}/>
          </Route>
      </Routes>

      <Routes>
          <Route path="dashboard" element={<Dashboard/>}>
          <Route path="insertdata" element={<Inserdata/>}/>
         
          </Route>
         
        
      </Routes>
    </BrowserRouter>
    
    
     </>
  )
}

export default App
