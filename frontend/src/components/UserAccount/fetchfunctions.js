import axios from "axios";
import getcookie from "../Login/gettoken";
import { errorfunction,successfunction } from "../../toaster";
export async function fetchuserdata(setuserdata,setloader) 
{ setloader(true)
  try{
    const token=getcookie();
    const userdata={
        token:token
    }
    if(token)
    {
       
        const result=await axios.post("https://recipe-finder-1.onrender.com/v1/getuserdetails",userdata);
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
          
          const result=await axios.post('https://recipe-finder-1.onrender.com/v1/getsaverecipe',data);
          const resultdata=await result.data;
       
          if(resultdata.status)
          {
           const resultrecipedata=await resultdata.data
           console.log(resultrecipedata)
           setsaveddata(resultrecipedata)
        
          }
           
    }
   
}
export async function savecontributes(data,setloader)
{
console.log(data)
   setloader(true);
 const token= getcookie();
 if(token)
 {
  const userdata={
      name:data.name,
      making_process:data.making_process,
      ingredients:data.ingredients,
      img:data.img,
      token:token,
    
  }
  console.log(userdata)
  const result=await axios.post('https://recipe-finder-1.onrender.com/v1/contributes',userdata);
  const resultdata=await result.data;
 
  if(resultdata.status)
  {
   
    successfunction('SuccessFully Uploaded')
  }
  setloader(false);
 }
}
export async function getcontributes(setdata,setloader)
{
try{
  setloader(true);
 const token= getcookie();
 
 if(token)
 {
  const data={      
    token:token,
  }
  const result=await axios.post('https://recipe-finder-1.onrender.com/v1/getcontributes',data);
  const resultdata=await result.data;
 
  if(resultdata.status)
  {
    setloader(false);
   setdata(resultdata.data)
  }
  else{
    setloader(false);
    
  }
 }
}
catch(err)
{
  console.log(err.message )
}
}
export function imageupload(formData,contributedata,setcontributedata,setloading,image)
{
  if(image)
  {
    setloading(true);
  axios.post('https://recipe-finder-1.onrender.com/v1/file_upload', formData)
  .then(response => {
     if(response.data.status)
     {
    
      setcontributedata({...contributedata,['img']:response.data.img[0]})
      setloading(false)
       successfunction('image uploaded successfully')
     }
     else{
       setloading(false)
       errorfunction('image uploaded unsuccessfull')
     }
  })
  .catch(error => {
    setloading(false)
     
  });
  }
  else{
     errorfunction('Please provide a valid image')
  }
}