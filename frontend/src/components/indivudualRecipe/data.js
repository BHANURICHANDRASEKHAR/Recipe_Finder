import axios from "axios"
import getcookie from '../Login/gettoken'
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
export async function store_comments_function(id,comment,rating,setcount)
{
    const token=await getcookie();
  const data={
    post_id:id,
    comments:comment,
    rating:rating,
    token:token,
  }
 const result=await axios.post('http://localhost:5000/v1/comment',data);

 const resultdata=await result.data;
 setcount((prev)=>prev+1)
}
export async function getcomments(id, setreviewsdata,setreviewscount)
{
    const result=await axios.get(`http://localhost:5000/v1/getcomments/${id}`)
    const data=await result.data;
    setreviewsdata(data.data)
 
    setreviewscount(data.size)

}