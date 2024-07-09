import React from 'react'
import { CDN_URL } from '../Utils/constants'
import dummy_img from '../assests/dummy_img.png'
import { useDispatch } from 'react-redux'
import { addItem, loadTotalPrice, removeItem } from '../Utils/slices/cartSlice'


const CartItem = ({itemData}) => {
  let dispatch = useDispatch()
  const {name , imageId  , price , defaultPrice , quantity} = itemData
  

  const plusButtonHandler=()=>{
    dispatch(addItem({...itemData}))
    dispatch(loadTotalPrice(price ? price/100 : defaultPrice/100))
  }

  const minusButtonHandler=()=>{
    dispatch(removeItem({...itemData}))
    dispatch(loadTotalPrice(price ? -price/100 : -defaultPrice/100 ))
  }

  return (
    <div className='flex justify-between py-2 px-4 bg-white m-4'>
    <img className='w-20 h-20' src={CDN_URL+imageId} onError={(e)=>{e.target.src = dummy_img} }></img>
    <p className='text-xl mt-5 '>{name}</p>
    <p className='mt-5 text-xl'>₹{price ? price/100 : defaultPrice/100}</p>
    <div className='flex border border-main_color h-8 mt-4 p-2 items-center rounded-full '>
      <button onClick={plusButtonHandler}>➕</button>
      <p className='px-2  '>{quantity}</p>
      <button onClick={minusButtonHandler}>➖</button>
    </div>
    </div>
  )
}

export default CartItem