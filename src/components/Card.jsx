import React from 'react'
import { CDN_URL } from '../Utils/constants'

const Card = ({data}) => {
 
  const {name , avgRating , cuisines ,cloudinaryImageId,locality} = data;
  
  return (
    <div className='w-[300px]   mb-6 shadow-2xl p-2'>
     <div className=''>
        <img className=' h-[300px]  w-full object-center mb-2 ' 
         src={CDN_URL + cloudinaryImageId} alt="img"></img>
     </div>
     <div className='flex justify-between mb-2  '>
     <h1 className='text-xl font-bold w-3/4 font-serif'>{name}</h1>
     <p className='p-1 bg-main_color w-1/4 text-center h-8'>{avgRating} ★</p>
     </div>
     <p className='text-sm '
     >{cuisines.length <= 3 ? cuisines.join(" , ") : cuisines[0]+ " , " + cuisines[1] + " , " + cuisines[2]}</p>
     <p className='text-sm'>Location : {locality}</p>
    </div>
  )
}

export default Card