import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { HiDocumentCurrencyRupee } from "react-icons/hi2";
import Base_url from '../config/Baseurl';
import { useDispatch, useSelector } from 'react-redux'
import { mycontext } from '../Contex';
import { cardEmpty } from '../Reduxtool/cardSlice';


const Chekout = () => {
  // const navigate = useNavigate()
  // const token = localStorage.getItem("token")
  // console.log(token);

  // useEffect(()=>{
  //   if(!token){
  //     navigate("/")
  //   }
  // },[])

  //=============================payment mothed======================================

  const {logedIn} = useContext(mycontext);
  const [cusData, setCusData] = useState({});
  const navigate = useNavigate();
  const dispatch= useDispatch();
  
  
  const [shoe,setShoe] = useState({
    name: "Training Shoes",
    creator: "Nike",
    img: "https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 500,
  });
  
  
  
  
  useEffect(()=>{
    if (!localStorage.getItem("token"))
    {
       navigate("/");
    }
    loadData();
  }, []);
  
  
  const loadData=async()=>{
    let api=`${Base_url}user/getdata?userid=${localStorage.getItem("userid")}`;
  
    try {
         const response = await axios.get(api);
         console.log(response.data);
         setCusData(response.data);
        
    } catch (error) {
       console.log(error);
    }
  
  }
  
  
   const Product= useSelector(state=>state.mycard.card);
      console.log(Product);
     
      let totalAmount=0;
      let productsName="";
      let imgURL="";
      const ans=Product.map((key)=>{
          totalAmount+=key.price * key.quanty;
          productsName+=key.name + ", ";
          imgURL=`${Base_url}${key.defaultImage}`;
          return(
              <>
                 <tr>
                 <td>
                  <img src={`${Base_url}${key.defaultImage}`} width="80" height="60" /> 
                  </td>
                  <td>{key.name}</td>
                  <td>{key.feild}</td>
                  <td>{key.price}</td>
                  <td>
                    {key.quanty}
                    
                  </td>
                  <td>{key.price * key.quanty}</td>
                                 </tr>
              </>
          )
      })
  
  
  
      const initPay = (data) => {
        const options = {
          key : "rzp_test_pzkHWxo3sRdVQW",
          amount: data.amount,
          currency: data.currency,
          name: productsName,
          description: "Test",
          image:imgURL,
          order_id: data.id,
          handler: async (response) => {
            try {
              const verifyURL = "https://localhost:8000/api/payment/verify";
              const {data} = await axios.post(verifyURL,response);
            } catch(error) {
              console.log(error);
            }
          },
          theme: {
            color: "#3399cc",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      };
      
  
  
  
      const handlePay = async () => {
        try {
          const orderURL = "http://localhost:8000/api/payment/orders";
          const {data} = await axios.post(orderURL,{amount: totalAmount, customername:cusData.name, address:cusData.address, city:cusData.city, email:cusData.email, proname:productsName});
          console.log(data);
          initPay(data.data);
  
          dispatch(cardEmpty());
  
  
        } catch (error) {
          console.log(error);
        }
      };
      
  return (
  <>
          <h1 align="center"> Your Checkout Page </h1>
              
          <Table align="center" striped bordered hover style={{width:"400px"}}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>feild</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th> Total </th>
                </tr>
              </thead>
                <tbody>
                {ans}
                </tbody>
                </Table>
        
        <h4 align="center" style={{color:"green"}}> Your Total Paybale Amount : {totalAmount}</h4>

        <div style={{width:"300px", margin:"auto", fontSize:"20px", fontWeight:"bold"}}>
          
        Customer Name : {cusData.name}
        <br/>
        Shipping Address : {cusData.address}
        <br/>
        Contact no :  {cusData.city}
        <br />
        state :{cusData.state}
        <br />
        Email :  {cusData.email}
        <br/>
        <br/>
        <Button onClick={handlePay} > Pay Now!</Button>
        <br/>   <br/>  <br/>

        </div>
    
  </>

  )
}

export default Chekout