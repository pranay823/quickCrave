import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useGetRestroData from '../Hooks/useGetRestroData'
import Card from './Card'
import ShimmerUI from './ShimmerUI'

const RestroCards = () => {

  useGetRestroData()

 const [restroList ,setrestroList] = useState(null);
 const allRestro = useSelector(store=>store.restro.allRestro);

 useEffect(() => {
   setrestroList(allRestro)
}, [allRestro]);


 if(allRestro == null) {
  return <ShimmerUI />
 }
 
 const selectHandler=(e)=>{
 if (e.target.value === 'Low to High')  low_to_high_Handler()
 if (e.target.value === 'High to Low')  high_to_low_Handler() 
 }

 const low_to_high_Handler=()=>{
  const sortedRestro = [...allRestro];
 sortedRestro?.sort((a,b)=>{
    return a.info.avgRating - b.info.avgRating 
  })
   setrestroList(sortedRestro);
 }

 const high_to_low_Handler=()=>{
  const sortedRestro = [...allRestro];
   sortedRestro?.sort((a ,b)=>{
    return b.info.avgRating - a.info.avgRating 
  })
  setrestroList(sortedRestro)
 }

  const searchHandler=(e)=>{
  const searchResult =allRestro.filter((restro)=> restro.info.name.toLowerCase().includes(e.target.value.toLowerCase()));
  setrestroList(searchResult)
  }


  return (
    <div className='mx-16 mt-10 '>
        <div className=' h-14 flex   '>
  
         <select onChange={(e)=>{selectHandler(e)}}
          className='bg-main_color p-3 font-medium outline-none font-serif tracking-wider m-1'  >
          <option >Filters</option>
           <option >Low to High</option>
           <option> High to Low</option>
         </select>
        <div className='w-72 flex m-1'>
          <input className='p-3 border border-black w-3/4 outline-none' onChange={(e)=>{searchHandler(e)}}
           type="search" placeholder='Search Restaurants'></input>
           <button  className='bg-main_color w-1/4 ' type='submit'>Search</button>
        </div>
         </div>
     
        <div className='flex flex-wrap  gap-4 justify-start    '>
            {restroList?.map((restro)=>(
             <Link to={'/restaurants/'+restro.info.id}  key={restro.info.id} className="flex" >
              <Card data={restro?.info} />
              </Link>
            ))}
        </div>
    
    </div>
  )
}

export default RestroCards