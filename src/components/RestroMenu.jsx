import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import useRestroMenu from '../Hooks/useRestroMenu';
import ShimmerUI from './ShimmerUI';

const RestroMenu = () => {
const restroData = useSelector(store=> store.restro.restroMenu)
console.log(restroData);
const restroCategories = restroData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || restroData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
// const {name , cuisines , locality , avgRating, sla ,costForTwo} = restroData?.cards[2]?.card?.card?.info || restroData?.cards[4]?.card?.card?.info
const {resid} = useParams();
useRestroMenu(resid)

if(restroData == null) return <ShimmerUI />



  return (
    <div className='w-1/2 mx-auto border border-black'>
    {/* <div className='flex justify-between p-2'>
        <div>
            <h1>{name}</h1>
            <p>{cuisines.length <= 3 ? cuisines.join(" , ") : cuisines[0]+ " , " + cuisines[1] + " , " + cuisines[2]}</p>
            <p>{locality}</p>
        </div>
        <div>
            <p className='p-6 border border-red-700'>{avgRating}  ★</p>
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

             category?.card.card?.title && (
                <p  className='px-4 py-2 bg-main_color m-2 flex justify-between rounded-full '>{category?.card?.card?.title} <p >🔽</p></p>   ) 
            ))}
    </div>
    </div>
  )
}

export default RestroMenu