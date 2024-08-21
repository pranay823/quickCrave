import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import useRestroMenu from '../Hooks/useRestroMenu';
import Accordion from './Accordion';
import RestroItems from './RestroItems';
import ShimmerUI from './ShimmerUI';

const RestroMenu = () => {
const restroData = useSelector(store=> store.restro.restroMenu)

const restroCategories = restroData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || restroData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
// const {name , cuisines , locality , avgRating, sla ,costForTwo} = restroData?.cards[2]?.card?.card?.info || restroData?.cards[4]?.card?.card?.info
const {resid} = useParams();
useRestroMenu(resid)
console.log(restroCategories , "category")



if(restroData == null) return <ShimmerUI />



  return (
    <div className='w-1/2 md:mx-auto border border-black mt-6 min-w-[400px] mx-6  '>
    {/* <div className='flex justify-between p-2'>
        <div>
            <h1 className='text-2xl font-extrabold'>{name}</h1>
            <p className='font-light'>{cuisines.length <= 3 ? cuisines.join(" , ") : cuisines[0]+ " , " + cuisines[1] + " , " + cuisines[2]}</p>
            <p className='font-light'>{locality}</p>
        </div>
        <div>
            <p className='p-6 border-2 border-main_color rounded-full '>{avgRating}  ★</p>
        </div>
    </div>
    <div className='  border-dashed border-black border-2  w-full '></div>
    <div className='flex justify-between p-2'>
        <p>{sla?.slaString}</p>
        <p>₹{costForTwo/100} For Two</p>
    </div> */}
    <div className='  border-dashed border-black border-2  w-full '></div>
    <h2 className='text-center'>Menu</h2>
    <div>
        {restroCategories?.map((category)=>(
             category?.card.card?.itemCards?.length   && (<Accordion title={category.card.card.title} data={category} />)      
            ))}
    </div>
    </div>
  )
}

export default RestroMenu