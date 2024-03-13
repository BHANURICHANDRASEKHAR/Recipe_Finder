import React,{useState,useEffect} from 'react'
import { gettypedata } from '../Recipes/fetchdata'
import { SiSimilarweb } from "react-icons/si";
import { Link } from 'react-router-dom';
export default function RelatedProducts({type}) {

    const [data,setdata]=useState([])
  useEffect(()=>{
    gettypedata(setdata,type)
  },[type])

  return(
    <React.Fragment>
    <h4 className='lead item-name d-block w-100'><SiSimilarweb/> Related Items </h4><br></br>
   <div className='card-data1'>
   {
    data.length>0&&data.slice(0,5).map((links,index)=>{
      return(
        <Link to={`/recipe/${encodeURIComponent(links._id)}-${encodeURIComponent(links.type)}`}  key={index}>
 
        <div className='card-data-items2 mt-3'>
        
        <div className='card-img2'>
        <img src={links.img} />
        </div>
        <div className='card-title2'>
        <h5 className='text-white text-center'>{links.name}</h5>
        </div>
     
        </div>      </Link>
      )
    })
  }
   </div>
    </React.Fragment>
  )
}
