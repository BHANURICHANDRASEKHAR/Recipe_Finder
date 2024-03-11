import React from 'react'
import { carddata } from './data'

export default function CardItems() {
  return (
    <div className='container mt-4' >    <div className='row'>
    <h3 className='text-center mt-4' style={{color:'#faa916',fontSize:'30px'}}>Poplar Categories</h3>
    <div className='col card-data'>

    {
        carddata.map((data)=>{
            return(
             <div className='card-data-items mt-3' key={data.id}>
             <div className='card-img'>
             <img src={data.img}/>
             </div>
             <div className='card-body'>
             <h5 className='card-title'>{data.name}</h5>
             </div>
             </div>
            )
        })
    }
    </div>
    </div>
       </div>
  )
}
