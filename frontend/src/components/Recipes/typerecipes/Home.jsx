import  React,{ useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import { ItemList } from "../CardItemsdata";
import {gettypedata} from '../fetchdata'
export default function Home() {
    const {type}=useParams();

    const [fulldata,setfulldata]=useState([]);

    useEffect(()=>{
        console.log('hlo hfjh')
        gettypedata(setfulldata,type)
    },[])
  return (
    <div className='container mt-4' ><div className='row'> 
{    fulldata.length>0&&<ItemList actualdata={fulldata}/>
}
    </div>
       </div>
  )
}
