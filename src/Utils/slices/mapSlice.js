import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
    name : "map",
    initialState : {
        lat : null,
        lng : null,
        location : "Jaipur",
    },
    reducers :{
        latitude_longitude : (state,action)=>{
         const {latitude , longitude , location } = action.payload
         state.lat =latitude
         state.lng = longitude
         state.location = location
        }
    }
})

export const {latitude_longitude} = mapSlice.actions

export default mapSlice.reducer