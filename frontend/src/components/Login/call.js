import axios from "axios";
import Cookie from 'js-cookie'
import { errorfunction} from "../../toaster";
 export async function getOTP(userdata,setisloading,setotp,setflag,setMode)
{
   setisloading(true)
   const userdata1={
      email:userdata.email,
      name:userdata.name,
      password:userdata.password,
      type:true
   }

   const result=await axios.post('http://localhost:5000/v1/mail',userdata1)
  
   const data=await result.data;
   if(data.status)
   {
      setisloading(false)
      setotp(data.otp)
      console.log(data.otp)
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

   const result=await axios.post('http://localhost:5000/v1/mail',userdata1)
   
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
export async function signup(userdata,setMode)
{
   const user={
     username:userdata.name,
      email:userdata.email,
      password:userdata.password
   }
   const data=await axios.post('http://localhost:5000/v1/sign_up',user)
   const result=await data.data;
   if(result.status)
   {
      setMode('signin')
   }
   else{
      console.log('error',result)
      errorfunction(result.msg)
   }
}
export async function signin(userdata,setShow,setisloading,setUser)
{
   setisloading(true)
   const user={
       email:userdata.email,
       password:userdata.password
    }
    console.log(user)
   const result=await axios.post('http://localhost:5000/v1/sign_in',user)
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
   console.log('hello')
   const userdata1={
      email:userdata.email,
      name:userdata.name,
      password:userdata.password,
      type:false
   } 
   
   const result=await axios.post('http://localhost:5000/v1/mail',userdata1)
  
   const data=await result.data;
   if(data.status)
   {
      setisloading(false)
      setotp(data.otp)
      console.log(data.otp)
      setflag(true)
   }
   else{
     errorfunction(data.msg)
     setisloading(false)
   }
}

export async function resetpassword(userdata,setisloading,setShow, setUser)
{
   const result=await axios.put('http://localhost:5000/v1/forget_password',userdata)
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