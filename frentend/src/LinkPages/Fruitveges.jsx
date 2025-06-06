import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Base_url from '../config/Baseurl'
import ProductCard from '../component/Card'


const Fruitveges = () => {
  const [mydata, Setmydata] = useState([])
  const loadData=async()=>{
     try {
        let api = `${Base_url}pages/fruitveges`
      const respone = await axios.get(api)
      const vegifru = respone.data.filter(item=>item.feild == 'Fruit Vegetabes')
      // console.log (respone.data)
      Setmydata(vegifru)
      
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

export default Fruitveges