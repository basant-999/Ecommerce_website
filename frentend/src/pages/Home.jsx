import axios from 'axios'
import  { useEffect, useState } from 'react'
import Base_url from '../config/Baseurl'
import {useDispatch} from "react-redux"
import { addcard } from '../Reduxtool/cardSlice'

const Home = () => {
  const dispatch= useDispatch()
const [mydata,Setmydata] = useState([])
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
  },[])

  const ans = mydata.map((key)=>{
    return(
      <>
      <div>
        <img src={`${Base_url}${key.defaultImage}`} alt="" />
        <p>{key.name}</p>
        <p>{key.feild}</p>
        <p>{key.data}</p>
        <p>{key.price}</p>
        <button onClick={()=>{dispatch(addcard({id:key._id,name:key.name,feild:key.feild,data:key.data,price:key.price,defaultImage:key.defaultImage, images:key.images}))}}>addtocard</button>
        
      </div>
      </>
    )
  })
  return (
    <>
    <h1>special offers</h1>
    {ans}
    </>
  )
}

export default Home