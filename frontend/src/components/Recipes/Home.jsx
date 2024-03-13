import React,{ useEffect, useState } from 'react'
import DataItmes from './CardItemsdata'
import './receipe-home.css'
import fetchdata from './fetchdata';
export default function Home() {
  console.log('Recipes Page')
  const [actualdata,setactualdata]=useState([])
  const [fulldata,setfulldata]=useState([])
     
  useEffect(()=>{
    fetchdata(setactualdata,setfulldata)
    },[]);
  return (
    <div className='container-fluid '>
    {actualdata.length>0&&<DataItmes actualdata={actualdata} setactualdata={setactualdata} fulldata={fulldata}/>}
    </div>
  )
}
