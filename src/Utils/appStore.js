import { configureStore } from "@reduxjs/toolkit";
import mapReducer from './slices/mapSlice'
import restroReducer from './slices/restroSlice'


const appStore = configureStore({
    reducer : {
     map : mapReducer,
     restro : restroReducer,
    }
})

export default appStore