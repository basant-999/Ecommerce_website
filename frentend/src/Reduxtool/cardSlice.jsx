import { createSlice } from "@reduxjs/toolkit";


const cardSlice = createSlice({
    name:"mycard",
    initialState:{
       card:[],
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

         },
         increaseQuanty:(state,actions)=>{
            for (var i=0;i<state.card.length;i++){
                if(state.card[i].id==actions.payload.id){
                    state.card[i].quanty++;
                }
            }
         },
         dcreaseQuanty:(state,actions)=>{
            for(var i=0;i<state.card.length;i++){
                if(state.card[i].id==actions.payload.id){
                    if(state.card[i].quanty<=1){
                        alert("only one item")
                    }else{
                        state.card[i].quanty--;
                    }
                   
                }
            }
         },
         deleteItem:(state,actions)=>{
            state.card= state.card.filter(key=>key.id!=actions.payload.id)
         }
    }
})

export default cardSlice.reducer
export const {addcard,increaseQuanty,dcreaseQuanty,deleteItem} = cardSlice.actions