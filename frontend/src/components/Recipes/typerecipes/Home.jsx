import  React,{ useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import { ItemList } from "../CardItemsdata";
import {gettypedata} from '../fetchdata'
import Searchbar from "../Searchbar";
export default function Home() {
    const {type}=useParams();
    const [fulldata,setfulldata]=useState([]);
     useEffect(()=>{
     
        gettypedata(setfulldata,type)
    },[])
  return (
    <div className='container mt-4' ><div className='row'> 
    <Searchbar fulldata={fulldata}/>
{    fulldata.length>0&&<ItemList actualdata={fulldata}/>
}
    </div>
       </div>
  )
}
