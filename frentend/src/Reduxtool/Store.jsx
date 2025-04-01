import {configureStore} from "@reduxjs/toolkit"
import myReducer from "./cardSlice"
const store = configureStore({
    reducer:{
      mycard:myReducer
    }
})
export default store