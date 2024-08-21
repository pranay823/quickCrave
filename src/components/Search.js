import React from 'react'
import useLatLong from '../Hooks/useLatLong';
import { useState , useRef } from 'react';

const Search = () => {

  const [location , setLocation ]= useState('jaipur');
  const city = useRef(null);
  

  const searchHandler=()=>{
 setLocation(city.current.value.toLowerCase());
  }
  

  useLatLong(location)


  return (
    <div className='flex mt-12  '>
    <div className='md:w-1/3 min-w-[400px] mx-5   bg-main_color rounded-full md:mx-auto  '>
    <input ref={city} className="p-4 w-3/4 border border-black outline-none rounded-full" 
    type="search" placeholder="Enter the location">
         </input>
    <button onClick={searchHandler}
     className='w-1/4 bg-main_color p-4 rounded-full text-lg font-serif   '
      type='submit'>Enter</button>
</div>
</div>
  )
}

export default Search