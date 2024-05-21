import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../Utils/slices/cartSlice';
import CartItem from './CartItem';

const Cart = () => {
    const dispatch = useDispatch()
    const totalPrice = useSelector(store=>store.cart.totalPrice)
    const items = useSelector(store=>store.cart.items);
    const navigate = useNavigate()
    console.log(items)

    console.log(items)
    if(items.length === 0 ){
        return(
            <div className=' flex flex-col mx-auto  mt-60 w-1/3'>
                <h1 className='text-3xl font-bold text-center mb-3'>No Items in Cart </h1>
                <button onClick={()=>{navigate('/homepage')}} className='bg-main_color p-2  '>See Restaurants</button>
            </div>
        )
    }
  return (
    <div className='w-1/2 border border-black mx-auto my-20 shadow-2xl  '>
       <div className=' bg-main_color p-4 shadow-lg '>
       <h1 className='text-2xl text-center'>Cart Items</h1>
       <div>
        {items?.map((item)=>(<CartItem itemData={item} />)) 
        }
       </div>
       <button onClick={()=> dispatch(clearCart())}  className=' bg-black py-2 px-4 text-white w-1/3 mx-56 '>Clear</button>
       </div>
       <div className='p-4 flex justify-between'>
        <p className='text-2xl'>Total  : ₹{totalPrice}</p>
        <p className='bg-black text-white px-4 py-2'>Checkout</p>
       </div>
    </div>
  )
}

export default Cart