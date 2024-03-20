import React from 'react'
import {Link} from 'react-router-dom'
export default function DataItems({actualdata}) {
   
    return(
        <div className='col card-data-items111'>
      
        {
         actualdata.map((data,index)=>{
                return(
                  <Link to={`/recipe/${encodeURIComponent(data?.post_id || data._id)}-${encodeURIComponent(data.type)}`}  key={index}>
       
                 <div className='card-data-items1 mt-3'>
                 
                 <div className='card-img1'>
                 <img src={data.img} />
                 </div>
                 <div className='card-title1'>
                <p className='text-dark  mt-3'>{data.name}</p>
                 </div>
              
                 </div>           </Link>
                )
            })
        }
       
        </div>
      )
}
