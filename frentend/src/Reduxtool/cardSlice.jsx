import { createSlice } from "@reduxjs/toolkit";


const cardSlice = createSlice({
    name:"mycard",
    initialState:{
       card:[]
    },
    reducers:{
         addcard:(state,actions)=>{
            const cardData = state.card.filter(key=>key.id==actions.payload.id);
            if(cardData.length>=1){
                alert("product alredy add")
            }
            else{
                state.card.push(actions.payload)
            }

         }
    }
})

export default cardSlice.reducer
export const {addcard} = cardSlice.actions