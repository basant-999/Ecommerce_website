import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base_url from '../config/Baseurl'
import ProductCard from '../component/Card'

const ProductDetails = () => {
    let {id} = useParams();

    const [Pdata , setPdata] = useState({});
        const loadProduct=async()=>{
            let api = `${Base_url}user/getProductDetails`
            const response = await axios.post(api,{id});
            console.log(response.data);
            setPdata(response.data);
        }
      
        useEffect(()=>{
            
            loadProduct();
        },[])

  return (
    <div>
        {/* <h1>dfghjklkjhg</h1>
        <h3>{Pdata.name}</h3>
        <div>Price : {Pdata.price}</div>
        <img src={`${Base_url}${Pdata.defaultImage}`} alt="" /> */}
           <>
                  <ProductCard
                  defaultUrl={Pdata.defaultImage}
                  name={Pdata.name}
                  ctg={Pdata.feild}
                  data = {Pdata.data}
                  price={Pdata.price}
                 />
              </>

    </div>
  )
}

export default ProductDetails