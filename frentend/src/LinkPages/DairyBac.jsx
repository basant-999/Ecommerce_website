import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Base_url from '../config/Baseurl'
import ProductCard from '../component/Card'

const DairyBac = () => {
    const [mydata, setMydata] = useState([])
    const loadData=async()=>{
        let api = `${Base_url}pages/dairybacry`
        try {
            const respone = await axios.get(api)
            // console.log(respone.data)
            const daibac = respone.data.filter(item=>item.feild == 'Dairy&bakery')
            // console.log(daibac)
            setMydata(daibac)
        } catch (error) {
            console.log(error)
            
        }

    }

    useEffect(()=>{
        loadData()
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

export default DairyBac