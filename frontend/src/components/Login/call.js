import axios from "axios";
import { errorfunction,promisefunction } from "../../toaster";
 export async function getOTP(userdata,setisloading,setotp,setflag)
{

   const result=await axios.post('http://localhost:5000/v1/mail',userdata)
   setisloading(true)
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
export async function resendotp(userdata, setOtp)
{
   const result=await axios.post('http://localhost:5000/v1/mail',userdata)
   
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
}