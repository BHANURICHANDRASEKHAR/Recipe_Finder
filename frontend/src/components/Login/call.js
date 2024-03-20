import axios from "axios";
import Cookie from 'js-cookie'
import { errorfunction} from "../../toaster";
import { initialdata } from "./Login";
 export async function getOTP(userdata,setisloading,setotp,setflag,setMode)
{
   setisloading(true)
   const userdata1={
      email:userdata.email,
      username:userdata.name,
      password:userdata.password,
      type:true
   }

   const result=await axios.post('https://recipe-finder-1.onrender.com/v1/mail',userdata1)
  
   const data=await result.data;
   if(data.status)
   {
      setisloading(false)
      setotp(data.otp)
      setflag(true)
   }
   else{
    errorfunction(data.msg)
    setMode('signin')
    setisloading(false)
   }
}
export async function resendotp(userdata, setOtp,type)
{
   const userdata1={
      email:userdata.email,
      name:userdata.name,
      password:userdata.password,
      type:type
   }

   const result=await axios.post('https://recipe-finder-1.onrender.com/v1/mail',userdata1)
   
   const data=await result.data;
   if(data.status)
   {
      setisloading(false)
      setOtp(data.otp)
      
   }
   else{
    errorfunction(data.msg)
    
   }
}
export async function signup(userdata,setMode,setuserdata)
{
   try{
      const user={
         username:userdata.name,
          email:userdata.email,
          password:userdata.password
       }
       const data=await axios.post('https://recipe-finder-1.onrender.com/v1/sign_up',user)
       const result=await data.data;
       if(result.status)
       {
          setuserdata(initialdata)
          setMode('signin')
       }
       else{
         
          errorfunction(result.msg)
       }
   }
   catch(e)
   {
      console.log(e.message)
   }
}
export async function signin(userdata,setShow,setisloading,setUser)
{
   setisloading(true)
   const user={
       email:userdata.email,
       password:userdata.password
    }
    
   const result=await axios.post('https://recipe-finder-1.onrender.com/v1/sign_in',user)
   const data=await result.data;
  
   if(data.status)
   {
      
      Cookie.set('usertoken', data.token, { expires: Infinity });
      setisloading(false)
      setShow(false)
      setUser(true)

   }
   else{
      setisloading(false)
      errorfunction(data.msg)
   }
}
export async function forgetpassword(userdata,setisloading,setotp,setflag)
{
   setisloading(true)
   
   const userdata1={
      email:userdata.email,
      name:userdata.name,
      password:userdata.password,
      type:false
   } 
   
   const result=await axios.post('https://recipe-finder-1.onrender.com/v1/mail',userdata1)
  
   const data=await result.data;
   if(data.status)
   {
      setisloading(false)
      setotp(data.otp)
     
      setflag(true)
   }
   else{
     errorfunction(data.msg)
     setisloading(false)
   }
}

export async function resetpassword(userdata,setisloading,setShow, setUser)
{
   const result=await axios.put('https://recipe-finder-1.onrender.com/v1/forget_password',userdata)
   setisloading(true)
   const data=await result.data;
   if(data.status)
   {
      Cookie.set('usertoken', data.token, { expires: Infinity });
      setisloading(false)
      setShow(false)
      setUser(true)
   }
   else{
     errorfunction(data.msg)
     setisloading(false)
   }
}