import { createSlice, removeListener } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
    items : [],
    totalPrice : 0,
    },
    reducers :{
    loadTotalPrice:(state, action)=>{
        state.totalPrice += action.payload;
    },
    addItem : (state,action)=>{
     if(state.items.length === 0){
        state.items.push({...action.payload , quantity : 1})
     }
     else{
      const itemPresent =  state.items.find((item)=>
          item.id === action.payload.id
        )
       if(itemPresent){
       state.items = state.items.map((item)=>
         item.id === action.payload.id ? {...item , quantity : item.quantity + 1} : item
        )
       }
       else{
        state.items.push({...action.payload , quantity : 1})
       }
      } },
       
       removeItem :(state,action)=>{
       const itemPresent = state.items.find((item)=>
        item.id === action.payload.id
       )
       if(itemPresent){
         if(itemPresent.quantity > 1 ){
          state.items = state.items?.map((item)=>(
         item.id === action.payload.id  ? {...item , quantity : item.quantity - 1} : item))
         }
         else{
            state.items = state.items?.filter((item)=>
            item.id !== action.payload.id )  
         }
       
      
       }
     
       },


      clearCart : (state)=>{
       state.items.length = 0
       state.totalPrice = 0
       
      }
    }
})

export const {  addItem , loadTotalPrice ,clearCart , removeItem} = cartSlice.actions;
export default cartSlice.reducer;