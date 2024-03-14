import axios from "axios";
import { errorfunction,promisefunction } from "../../toaster";
 export async function getOTP(userdata,setotp,setflag)
{

   const result=await axios.post('http://localhost:5000/v1/mail',userdata)
//    promisefunction(result)
   const data=await result.data;
   if(!data.status)
   {
    //  setotp(data?.otp)
     setflag(true)
   }
   else{
    errorfunction(data.msg)
   }
}