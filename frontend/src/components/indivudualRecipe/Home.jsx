import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Items from './Items';
import {fetchdatafromdatabase} from './lanugaes'
import './home.css'
export default function Home() {


    const {name}=useParams();
    const params=name.split('-')

  const [itemdata,setitemdata]=useState([])
   useEffect(()=>{
  fetchdatafromdatabase(setitemdata,params[0])

 
 },[params[0]])

  return (
    <div className='container-fluid  '>
    {      itemdata.length>0&& <Items itemdata={itemdata} type={params[1]}/>
  }
    </div>
  )
}
