import axios from "axios";
import { errorfunction,promisefunction } from "../../toaster";
 export async function getOTP(userdata,setotp,setflag)
{

   const result=await axios.post('http://localhost:5000/v1/mail',userdata)
   promisefunction(result)
   const data=await result.data;
   if(data.status)
   {
     setotp(data.otp)
     setflag(true)
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
   const data=await axios.post('http://localhost:5000/v1/mail',user)
   const result=await data.data;
   if(result.status)
   {
      setMode('signin')
   }
}