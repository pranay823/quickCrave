import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
    name : "map",
    initialState : {
        lat : null,
        lng : null,
    },
    reducers :{
        latitude_longitude : (state,action)=>{
         const {latitude , longitude } = action.payload
         state.lat =latitude
         state.lng = longitude
        }
    }
})

export const {latitude_longitude} = mapSlice.actions

export default mapSlice.reducer