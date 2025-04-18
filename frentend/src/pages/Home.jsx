import axios from 'axios'
import  { useContext, useEffect, useState } from 'react'
import Base_url from '../config/Baseurl'
import {useDispatch} from "react-redux"
import { addcard } from '../Reduxtool/cardSlice'
import { mycontext } from '../Contex'


import "../css/home.css"
import ProductCard from '../component/Card'

const Home = () => {
  const dispatch= useDispatch()
const [mydata,Setmydata] = useState([])

const{logedIn,setuemail,setUname} = useContext(mycontext);

    const customerAuthentication=async()=>{
      const token =  localStorage.getItem("token")
      if(token){
        let api = `${Base_url}user/custauthenticate`
        const response = await axios.get(api,{
          headers: { Authorization: `Bearer ${token}` },
        })
        console.log(response.data)
        localStorage.setItem("username", response.data.name);
        localStorage.setItem("useremail", response.data.email);
        localStorage.setItem("userid", response.data._id);
        setUname(response.data.name);
        setuemail(response.data.email);
      }
    }

  const loaddata=async()=>{
     let api = `${Base_url}admin/showproduct`
     try {
      const response = await axios.get(api)
      console.log(response.data)
      Setmydata(response.data)
      console.log(mydata)
    } catch (error) {
      console.log(error)
    }
  }

 
  useEffect(()=>{
      loaddata()
      customerAuthentication()
  },[])

  useEffect(()=>{
    customerAuthentication();
  },[logedIn])

  const ans = mydata.map((key)=>{
    return(
      <>
      {/* <div >  
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${Base_url}${key.defaultImage}`} />
            <Card.Body>
              <Card.Title>{key.name}</Card.Title>
              <Card.Text>
              <p>{key.feild}</p>
              <p>{key.data}</p>
              <p>{key.price}</p>
              </Card.Text>
              <Button variant="primary" onClick={()=>{dispatch(addcard({id:key._id,name:key.name,feild:key.feild,data:key.data,price:key.price,defaultImage:key.defaultImage, images:key.images,quanty:1}))}}>Add to Cart</Button>
            </Card.Body>
        </Card>
      </div> */}

      <ProductCard defaultUrl={key.defaultImage}
          name={key.name}
          ctg={key.feild}
          data = {key.data}
          price={key.price}
      />
      </>
    )
  })
  return (
    <>
    {/* <h1>special offers</h1> */}
    <div id='cardhome' >
    {ans}
    </div>
  
    </>
  )
}

export default Home