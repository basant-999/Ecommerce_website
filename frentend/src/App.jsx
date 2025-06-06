import Dashboard from "./dashboardcompo/Dashboard"
import Inserdata from "./dashboardcompo/Inserdata"
import Layout from "./Layout"
import Cardinster from "./pages/Cardinster"
import Chekout from "./pages/Chekout"
import Home from "./pages/Home"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import CustomerOrder from "./dashboardcompo/Customeroder"

import ProductDetails from "./pages/ProductDetails"
import Nonvag from "./LinkPages/Nonvag"
import Veg from "./LinkPages/Veg"
import Fruitveges from "./LinkPages/Fruitveges"
import PersCare from "./LinkPages/PersCare"
import DairyBac from "./LinkPages/DairyBac"

import ProtectedRoute from "./component/ProtectedRoute"




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
          <Route path="nonvag" element={<Nonvag/>}/>
          <Route path="veg" element={<Veg/>}/>
          <Route path="fruitveges" element={<Fruitveges/>}/>
          <Route path="personalcare" element={<PersCare/>}/>
          <Route path="dairybac" element={<DairyBac/>}/>


          
         
          </Route>
      </Routes>

      <Routes>
          <Route path="dashboard" element={ <Dashboard/>}>
          <Route path="insertdata" element={<Inserdata/>}/>
          <Route path="coustomerorder" element={<CustomerOrder/>}/>
         
         
          </Route>
      </Routes>

       <Routes>
             <Route path="/productdetails/:id" element={<ProductDetails/>}>

             </Route>

       </Routes>
    </BrowserRouter>
    
    
     </>
  )
}

export default App
