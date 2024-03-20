import axios from "axios"
import getcookie from '../Login/gettoken'
import { errorfunction, successfunction } from "../../toaster"

export async function store_comments_function(id,reviewdata,setcount,setShow)
{
   const flag=reviewvalidation(reviewdata)
   if(flag)
   {
    const token= await getcookie();
    if(token)
    {
        const data={
            post_id:id,
            comments:reviewdata.content,
            rating:reviewdata.rating,
            token:token,
          }
          const result=await axios.post('https://recipe-finder-1.onrender.com/v1/comment',data);
        
          const resultdata=await result.data;
      
           setcount((prev)=>prev+1)
    }
    else{
       errorfunction(`you need's to login`)
       setShow(true)
    }
   }
   
}
export async function getcomments(id, setreviewsdata,setreviewscount)
{
    const result=await axios.get(`https://recipe-finder-1.onrender.com/v1/getcomments/${id}`)
    const data=await result.data;
    setreviewsdata(data.data)
 
    setreviewscount(data.size)

}
export function reviewvalidation(review)
{
    if(review.content.trim()=='' || review.rating<0)
    {
        errorfunction('Please fill all the fields')
        return false
    }
    return true;

}
export async function likescount(setreviewsdata,UserId,post_id,likes)
{
    const likesdata={
        UserId:UserId,
        post_id:post_id,
        likes:likes
    }
 const result=  await axios.post('https://recipe-finder-1.onrender.com/v1/inclikes',likesdata)
 const data=await result.data;
 setreviewsdata(data.data)
   
}
export async function saverecipe(post,setcount,saveddata)
{
    
    const bit=saveddata.find((items)=>items.post_id==post._id)
    if(!bit)
    {
      
        const token= await getcookie();
        if(token)
        {
            const data={
                post_id:post._id,
                img:post.img,
                name:post.name,
                type:post.type,
                token
              }
              const result=await axios.post('https://recipe-finder-1.onrender.com/v1/saverecipe',data);
              const resultdata=await result.data;
              if(resultdata.status)
              {
                setcount((prev)=>prev+1)
                 successfunction(resultdata.msg)
              }
               
        }
        else{
           errorfunction(`you need's to login`)
           
        }
    }
    else{
        successfunction('Already Saved')
    }
  
  
}
export async function getsaverecipe(post,setflag,setsaveddata)
{
    
    const token= await getcookie();
    if(token)
    {
        const data={
            post_id:post._id,
            token:token,
          }
          
          const result=await axios.post('https://recipe-finder-1.onrender.com/v1/getsaverecipe',data);
          const resultdata=await result.data;
       
          if(resultdata.status)
          {
           const resultrecipedata=await resultdata.data
           const bit=resultrecipedata.find((items)=>items.post_id==data.post_id)
           setsaveddata(resultrecipedata)
           if(bit)
           {
            setflag(true)
           }
           else{
            setflag(false)
           }
          }
           
    }
    else{
       errorfunction(`you need's to login`)
      
    }
}
