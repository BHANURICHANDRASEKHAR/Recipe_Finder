import React from 'react'
import { Link } from 'react-router-dom';
import Sort from './Model';
export default function Home({actualdata,setactualdata,fulldata}) {

  return (
 
    <div className='container mt-4' ><div className='row'>
    <Sort fulldata={fulldata} setactualdata={setactualdata}/>
    <ItemList actualdata={actualdata}/>
    </div>
       </div>
  )
}
export const ItemList=({actualdata})=>{
  return(
    <div className='col card-data'>

    {
     actualdata.map((data,index)=>{
            return(
             <div className='card-data-items1 mt-3' key={index}>
             
             <div className='card-img1'>
             <img src={data.img} />
             </div>
             <div className='card-body'>
             <h5 className='card-title1 text-white'>{data.name}</h5>
             </div>
          
             </div>
            )
        })
    }
    </div>
  )
}
