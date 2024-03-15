import React,{useEffect, useState} from 'react'
import Avatar from 'antd/es/avatar/avatar'
import { AiFillStar } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import {getcomments } from './data';
export default function UserReview({count,itemid,setreviewscount}) {
  const [usersreviewsdata,setusersreviewsdata]=useState([])
useEffect(()=>{
  getcomments(itemid,setusersreviewsdata,setreviewscount)
},[count])

  return (
    <React.Fragment>
    {
     usersreviewsdata.length > 0  &&  usersreviewsdata.map((data,index)=>{
      return(
         <div className='row m-2 border-top1 ' key={index} style={{overflowWrap:'anywhere'}}>
         <div className='col'>
         <div  className='mt-2 user-review border-0 p-0'>
         <div className='user-icon p-2'><Avatar size={30} className='bg-gray  text-dark text-black m-2'>{data.username.charAt(0) }</Avatar></div>
         <div className='p-2 '>
         <div className='mt-1'>           
        <div className='d-flex justify-content-between'>
        <UserRatings rating={data.rating} name={data.username}/> <span className='like'><BiLike /></span> 
        </div>
           <div className='mt-3' >
           <p className='text-justify'>{data.comments}</p>
           </div>
         </div>
         </div>
         </div>
          </div>
     
        </div>
  
      )
    })
    }
    </React.Fragment>
  )
}
const UserRatings=({rating,name})=>{
  return (
    <div>
     <p className='m-0'>{name}</p>
       {[1, 2, 3, 4, 5].map((star,index) => (
         <span
           key={index+star}
           style={{
             cursor: 'pointer',
             fontSize: '16px',
             color:'gray',
             color: star <= rating ? 'gold' : 'gray',
           }}
         >
           <AiFillStar/>
         </span>
       ))}
     </div>
  )
}