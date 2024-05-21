import React, { useEffect, useState } from 'react'
import {  getAuth, signOut ,onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';

const Header = () => {
   const navigate = useNavigate()
   const [isLogIn, setisLogIn] =  useState(false)
   const cartitems = useSelector(state=>state.cart.items)
   const totalItems = cartitems.reduce((total,item)=>(
   total + item.quantity
   ),0)
  

   useEffect(()=>{
    const auth = getAuth();
   onAuthStateChanged(auth, (user) => {
  if (user) {
     setisLogIn(true);
     navigate('/homepage');
    const uid = user.uid;
    
  } else {
    setisLogIn(false)
   navigate('/')
  }
  });
   },[])


 const handleSignOut=()=>{
 const auth = getAuth();
  signOut(auth).then(() => {
    toast('Sign out successfully')

  }).catch((error) => {
    toast("An error occured");
  });
 }


  return (
    <div className=' flex justify-between shadow-xl ' >
    <div className=''>
     <img className='w-24 p-2'
      src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_192,h_192/portal/c/logo_2022.png' alt="logo"></img>
    </div>
    <div className='border w-3/4 flex' >
    <ul className='flex justify-between w-3/4  text-2xl p-8 text-light-grey font-serif '>
    <Link to={'/homepage'}><li className=' hover:text-main_color ease-in duration-100  '>Home</li></Link>
      <li className=' hover:text-main_color ease-in duration-100  '>About us</li>
      <li className=' hover:text-main_color ease-in duration-100  '>Contact us</li>
     <Link to={'/Cart'}> <li className=' hover:text-main_color ease-in duration-100  '>Cart[{totalItems}]</li></Link>
    </ul>
   {/* <p className='p-8 text-xl '>test</p> */}
    {isLogIn && <button onClick={handleSignOut}
     className=' m-6 px-4 bg-main_color rounded-3xl font-serif'>Sign out</button>}
    </div>
  
    </div>

  )
}

export default Header