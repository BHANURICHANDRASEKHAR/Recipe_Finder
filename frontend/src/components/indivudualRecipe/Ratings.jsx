import { useState } from "react"
import React from 'react'
import { AiFillStar } from "react-icons/ai";

export default function Ratings({rating,setrating}) {

  return (
    <div className="mb-4">
 
       {[1, 2, 3, 4, 5].map((star) => (
         <span
           key={star}
          onClick={()=>{setrating(star)}}
          //  style={{
          //    cursor: 'pointer',
          //    fontSize: '26px',
          //    color:'gray',
          //    color: star <= rating ? 'gold' : 'gray',
          //  }}
         >
           <AiFillStar/>
         </span>
       ))}
     </div>
  )
}
