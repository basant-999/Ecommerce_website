import React, { useEffect, useState } from 'react'
import ProductCard from '../component/Card'
import axios from 'axios'
import Base_url from '../config/Baseurl'


const Nonvag = () => {
  const [mydata,Setmydata] = useState([])

 
  const loaddata=async()=>{
    
    try {
          let api = `${Base_url}pages/nonveg`
          const response = await axios.get(api)
          const nonvegItem = response.data.filter(item=>item.feild == "Non vag")
          // console.log(nonvegItem)
          Setmydata(nonvegItem)
          // console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    loaddata()
  },[])

 
    
   
  return (
  <>
    <div  id='cardhome' >
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

export default Nonvag