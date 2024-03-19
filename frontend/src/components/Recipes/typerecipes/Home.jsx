import  React,{ useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import { ItemList } from "../CardItemsdata";
import {gettypedata} from '../fetchdata'
import Searchbar from "../Searchbar";
import Loader from "../../../Loader";
import '../receipe-home.css'
export default function Home() {
  console.log('recipe type page')

    const {type}=useParams();
    const [fulldata,setfulldata]=useState([]);
    const [loader,setloader]=useState(false)
     useEffect(()=>{

        gettypedata(setfulldata,type,setloader)
        
    },[])
  return (
    <div className='container mt-4' ><div className='row'> 
    {loader&&<Loader/>}
    <Searchbar fulldata={fulldata}/>
{    fulldata.length>0&&<ItemList actualdata={fulldata}/>
}
    </div>
       </div>
  )
}
