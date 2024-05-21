import { configureStore } from "@reduxjs/toolkit";
import mapReducer from './slices/mapSlice'
import restroReducer from './slices/restroSlice'
import cartReducer from './slices/cartSlice'


const appStore = configureStore({
    reducer : {
     map : mapReducer,
     restro : restroReducer,
     cart : cartReducer
    }
})

export default appStore