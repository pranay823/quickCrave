import React from 'react'
import { CDN_URL } from '../Utils/constants'
import dummy_img from '../assests/dummy_img.png'
import { useDispatch } from 'react-redux'
import { addItem, loadTotalPrice } from '../Utils/slices/cartSlice'

const Item = ({itemData}) => {
    const {name , description ,  defaultPrice,  imageId ,price ,id  } = itemData
    const dispatch = useDispatch()

    const addItemHandler=()=>{
    const itemPrice = itemData.price ? itemData.price/100 : itemData.defaultPrice/100
    console.log(itemPrice , itemData.name)
    dispatch(loadTotalPrice(itemPrice))
    dispatch(addItem({...itemData } ))
    }

  return (
    <div className='flex justify-between  m-2 shadow-lg p-2  '>
        <div className='w-3/4 '>
         <div className='flex gap-2 my-2'><h1>{name}</h1><p>₹{defaultPrice/100 || price/100}</p></div>
         <p className='md:text-sm text-xs'>{description}</p>
        </div>
        <div className='w-1/4 flex justify-center p-2 my-2 relative'>
        <img className='w-28 h-28'
         src={CDN_URL+imageId} onError={(e)=>{e.target.src = dummy_img}} ></img> 
         <p onClick={addItemHandler} className='absolute bottom-[-5px]  bg-main_color p-2 text-sm'>➕ADD➕</p>
        </div>
    </div>
  )
}

export default Item