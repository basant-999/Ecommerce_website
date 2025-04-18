import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Base_url from '../config/Baseurl'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import {increaseQuanty,dcreaseQuanty,deleteItem} from "../Reduxtool/cardSlice"
import { useNavigate } from "react-router-dom"
import "../css/cardinsert.css"
const Cardinster = () => {
  const navigate = useNavigate()
    const product = useSelector(state=>state.mycard.card)
    console.log(product)
    const dispatch = useDispatch()
     let totalamount = 0;
    const ans = product.map((key)=>{
        totalamount+= key.price*key.quanty
        return(
            <>
            {/* <div>
            <img src={`${Base_url}${key.defaultImage}`}  style={{height:"100px"}} alt="" />
            {key.name}
                {key.feild}
                {key.data}
                {key.price}
                <FaMinus onClick={()=>{dispatch(dcreaseQuanty({id:key.id}))}} />
                {key.quanty}
                <FaPlus onClick={()=>{dispatch(increaseQuanty({id:key.id}))}} />

                {key.price*key.quanty}

                <MdDeleteSweep onClick={()=>{dispatch(deleteItem({id:key.id}))}} />
            </div> */}
               

            {/* ================================== */}
            <div>
            <section id='Addcard1'>
                <div id='addimge'>  <img src={`${Base_url}${key.defaultImage}`}  alt="" /></div>
                <div id='Addcard2'>
                      <div id='Addcard3' >
                     <div> Pname: {key.name}   </div>  <br />
                     <div> price: {key.price}   </div>  <br />
                      </div>
                    <div id='Addcard4'>
                        
                        <FaMinus onClick={()=>{dispatch(dcreaseQuanty({id:key.id}))}} />
                        {key.quanty}
                        <FaPlus onClick={()=>{dispatch(increaseQuanty({id:key.id}))}} />
                        
                    </div>
                   
                </div>

                <div>
                      <div>
                      Amount:  {key.price*key.quanty}
                      </div> <br />
                    <div id='addbtn'>
                      <button onClick={()=>{dispatch(deleteItem({id:key.id}))}} >Delete</button>
                      
                    </div>
                </div>
              
            </section>
          
            
            </div>
           
           
            </>
        )
    })
  return (
    <>
    <div id='addheadin'>
      <h1>Shopping Cart</h1>
      Total Ammount:  {totalamount}
      
    </div>
    {ans}
    <div id='Addcheckoutbtn'>
    <button  onClick={()=>{navigate("/checkout")}}>Check-out</button>
      
    </div>
   
   
    </>
  )
}

export default Cardinster