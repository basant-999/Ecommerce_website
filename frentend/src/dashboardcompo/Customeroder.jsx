import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Base_url from "../config/Baseurl";
const CustomerOrder=()=>{
const [mydata, setMydata]= useState([]);


const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };
    //===================================================================================
const loadData=async()=>{
  
    
       let api=`${Base_url}admin/getcustomerorder`;
       try {
          const response = await axios.get(api);
          console.log(response.data);
          setMydata(response.data);
       } catch (error) {
        console.log(error);
       }
}


useEffect(()=>{
    loadData();
}, []);

const ans=mydata.map((key)=>{
    
      return(
        <>
          <tr>
            <td>{key.name}</td>
            <td>{key.totalamount}</td>
            <td>{key.customername}</td>
            <td>{key.address}</td>
            <td>{key.city}</td>
            <td>{key.email}</td>
            <td>{formatDate(key.dop)}</td>
          </tr>
        </>
      )
});


    return(
        <>
        <div style={{textAlign:"center"}}>
         <h1> Customer Orders</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Products Name</th>
          <th>Total Amount</th>
          <th>Customer name</th>
          <th>Shipping Address</th>
          <th>City</th>
          <th>Email</th>
          <th> Date of Purchasing </th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
     </Table>
     </div>
        </>
    )
}
export default CustomerOrder;