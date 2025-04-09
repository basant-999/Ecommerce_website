import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Base_url from '../config/Baseurl'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import {increaseQuanty,dcreaseQuanty,deleteItem} from "../Reduxtool/cardSlice"
import { useNavigate } from "react-router-dom"
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
            <div>
            <img src={`${Base_url}${key.defaultImage}`} alt="" />
            {key.name}
                {key.feild}
                {key.data}
                {key.price}
                <FaMinus onClick={()=>{dispatch(dcreaseQuanty({id:key.id}))}} />
                {key.quanty}
                <FaPlus onClick={()=>{dispatch(increaseQuanty({id:key.id}))}} />

                {key.price*key.quanty}

                <MdDeleteSweep onClick={()=>{dispatch(deleteItem({id:key.id}))}} />
            </div>
               
            <button onClick={()=>{navigate("/checkout")}}>check-out</button>

         
            </>
        )
    })
  return (
    <>
    <h1>card edit data</h1>
    {totalamount}
    {ans}
   
   
    </>
  )
}

export default Cardinster