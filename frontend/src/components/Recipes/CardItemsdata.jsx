import React from 'react'
import { Link } from 'react-router-dom';
import Sort from './Model';
import {  FloatButton  } from 'antd'
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
    <div className='col card-data-items111'>
  
    {
     actualdata.map((data,index)=>{
            return(
              <Link to={`/recipe/${encodeURIComponent(data._id)}-${encodeURIComponent(data.type)}`}  key={index}>
   
             <div className='card-data-items1 mt-3'>
             
             <div className='card-img1'>
             <img src={data.img} />
             </div>
             <div className='card-title1'>
             <h5 className='text-white'>{data.name} </h5>
             </div>
          
             </div>           </Link>
            )
        })
    }
    <FloatButton.BackTop />
    </div>
  )
}
