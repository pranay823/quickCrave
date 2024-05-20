import { createSlice } from "@reduxjs/toolkit";

const restroSlice = createSlice({
    name : "restro",
    initialState : {
        allRestro : null,
        restroMenu : null,
    },
    reducers : {
        loadAllRestro : (state,action)=>{
            state.allRestro = action.payload;
        },
        loadRestroMenu : (state,action)=>{
         state.restroMenu = action.payload   
        }

    }
    
})

export const {loadAllRestro , loadRestroMenu} = restroSlice.actions
export default  restroSlice.reducer