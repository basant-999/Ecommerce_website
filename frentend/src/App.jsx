import Dashboard from "./dashboardcompo/Dashboard"
import Inserdata from "./dashboardcompo/Inserdata"
import Layout from "./Layout"
import Home from "./pages/Home"
import { BrowserRouter,Route,Routes } from "react-router-dom"



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
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
