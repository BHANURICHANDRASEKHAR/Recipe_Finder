import { useState } from "react"
import React from 'react'
import { AiFillStar } from "react-icons/ai";

export default function Ratings({reviewdata,setreviewdata}) {
 
  return (
    <div className="mb-4">
 
       {[1, 2, 3, 4, 5].map((star) => (
         <span
           key={star}
          onClick={()=>{setreviewdata({...reviewdata,['rating']:star})}}
           style={{
             cursor: 'pointer',
             fontSize: '26px',
             color: star <= reviewdata.rating ? 'gold' : 'gray',
           }}
         >
           <AiFillStar/>
         </span>
       ))}
     </div>
  )
}
