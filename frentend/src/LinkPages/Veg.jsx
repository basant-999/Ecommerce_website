import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Base_url from '../config/Baseurl'
import ProductCard from '../component/Card'

const Veg = () => {
  const [mydata ,Setmydata] = useState([])
  const loadData=async()=>{
    let api = `${Base_url}pages/veg`
    try {
       const respone = await axios.get(api)
      //  console.log(respone.data)
      const vegItem = respone.data.filter(item=>item.feild == 'Veg')
      Setmydata(vegItem)
       
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(()=>{
    loadData()
  },[])
  return (
   <>
     <div id='cardhome'>
       {
        mydata.map((key)=>{
          return(
            <>
               <ProductCard
                  defaultUrl={key.defaultImage}
                  name={key.name}
                  ctg={key.feild}
                  data = {key.data}
                  price={key.price}
                 />
            </>
          )
        })
       }

     </div>
   </>
  )
}

export default Veg