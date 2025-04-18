import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Base_url from '../config/Baseurl'
import ProductCard from '../component/Card'

const PersCare = () => {
    const [mydata, Setmydata] = useState([])
    const loaddata=async()=>{
        
        try {
            let api = `${Base_url}pages/personalcare`
            const responses =await axios.get(api)
           //  console.log(responses.data)
           const percare = responses.data.filter(item=>item.feild == 'personal care')
           console.log(percare)
           Setmydata(percare)
            
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

export default PersCare