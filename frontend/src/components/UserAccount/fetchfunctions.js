import axios from "axios";
import getcookie from "../Login/gettoken";
export async function fetchuserdata(setuserdata,setloader) 
{ setloader(true)
  try{
    const token=getcookie();
    const userdata={
        token:token
    }
    if(token)
    {
       
        const result=await axios.post("http://localhost:5000/v1/getuserdetails",userdata);
        const data=await result.data.data;
        setuserdata(data);
        setloader(false);
    }
    else{
        console.log('no token')
    }
  }
  catch(err){
    setloader(false);
    console.log(err);
  }
}
export async function getsaverecipe(setsaveddata,setloading)
{
    
    const token=  getcookie();
    if(token)
    {
        const data={
           
            token:token,
          }
          
          const result=await axios.post('http://localhost:5000/v1/getsaverecipe',data);
          const resultdata=await result.data;
       
          if(resultdata.status)
          {
           const resultrecipedata=await resultdata.data
           console.log(resultrecipedata)
           setsaveddata(resultrecipedata)
        
          }
           
    }
   
}
export async function savecontributes(data)
{
  console.log('saving',data);
}