import { useRef, useState } from "react";
import { Validate } from "../Utils/Validate";
import { auth } from "../Utils/firebase";
import HomePage from "./HomePage";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login=()=>{
      const [isSignIn , setisSignIn] = useState(true)
      const [errorHandle,seterrorHandle]=useState(null);
      const email =useRef(null);
      const password=useRef(null);
      const navigate=useNavigate();
      


     const sighuphandler=()=>{
      setisSignIn(!isSignIn);
     }

     const handleLogin=()=>{
    const result= Validate(email.current.value,password.current.value)
     seterrorHandle(result);
     if(result != null) return   toast(errorHandle);
     
   if(!isSignIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        toast("Account Created");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast("Already Account Created");
      });

   } 
   else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast("Account not Created");
  });
   }   
  }
     


    return(
       <div className=" w-1/3  mx-auto my-28  min-w-[400px]">
       <div>
        <h1 className=" text-center text-2xl md:text-5xl text-text_color tracking-wider font-semibold">{isSignIn?"Login":"Sign up"}</h1>
       </div>
       <div className="m-8 ">
        {!isSignIn && <input type="text" 
         className="outline-none  border  border-black p-4 w-full mb-2 " placeholder="Full-Name"></input> }
        <input type="email" ref={email}
         className="outline-none  border  border-black p-4 w-full mb-2 " placeholder="E-mail"></input>

        <input className="outline-none  border  border-black p-4 w-full  "
         type="password" ref={password} placeholder="Password" ></input>
         <p className=" text-red-600 text-lg relative text-left my-2">{errorHandle}</p>
         <button onClick={handleLogin} className="bg-main_color w-full p-4 text-lg md:text-xl mb-2 hover:bg-orange-500   ">{isSignIn?"Login":"Sign up"}</button>
         <p onClick={sighuphandler} className="text-main_color underline hover:text-orange-500">{isSignIn?"Create an account":"Already have account"}</p>
       </div>
       </div>
    )
}

export default Login;