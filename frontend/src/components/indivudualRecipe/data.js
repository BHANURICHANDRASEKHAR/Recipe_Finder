import axios from "axios"
import { promisefunction } from "../../toaster"
export const testreviews=[
    {
        msg:'uhedhuweerwiuuih hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhgdhdhghhdhhbhanui chadfyhghhhjhhfgujbhanuri chsnhdcbhbshjdsfhjdhjdhfsjhdfsjhjdfshjfdshjdsfhh',
        name:'Chandu',
        rate:'2'
    },
    {
        msg:'uhesdhuweerwiuuih hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhgdhdhghhdhhbhanui chadfyhghhhjhhfgujbhanuri chsnhdcbhbshjdsfhjdhjdhfsjhdfsjhjdfshjfdshjdsfhh',
        name:'Bhanuri',
        rate:'2'
    }
    ,
    {
        msg:'uhedhuweerwiuuih hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhgdhdhghhdhhbhanui chadfyhghhhjhhfgujbhanuri chsnhdcbhbshjdsfhjdhjdhfsjhdfsjhjdfshjfdshjdsfhh',
        name:'Murali',
        rate:'2'
    }
    ,    {
        msg:'uhedhuweerwiuuih hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhgdhdhghhdhhbhanui chadfyhghhhjhhfgujbhanuri chsnhdcbhbshjdsfhjdhjdhfsjhdfsjhjdfshjfdshjdsfhh',
        name:'Undela',
        rate:'2'
    }
]
export async function store_comments_function(id,comment,rating)
{
  const data={
    post_id:id,
    comment:comment,
    rating:rating
  }
 const result=await axios.post('http://localhost:5000/v1/comment',data);
 promisefunction(result);
 const resultdata=await result.data;
 console.log(resultdata)
}