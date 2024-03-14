import axios from "axios";
 export async function getOTP(userdata)
{

   const result=await axios.post('http://localhost:5000/v1/mail',userdata)
   const data=await result.data;
   console.log(data)
}