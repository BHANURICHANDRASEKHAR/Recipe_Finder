import React,{ useEffect, useState } from 'react'
import DataItmes from './CardItemsdata'
import './receipe-home.css'
import fetchdata from './fetchdata';
import Loader from '../../Loader';
export default function Home() {
  console.log('Recipes Page')
  const [actualdata,setactualdata]=useState([])
  const [fulldata,setfulldata]=useState([])
  const [loader,setloader]=useState(false)
  useEffect(()=>{
    fetchdata(setactualdata,setfulldata,setloader)
    },[]);
  return (
    <div className='container-fluid '>
    {loader&&<Loader/>}
    {actualdata.length>0&&<DataItmes actualdata={actualdata} setactualdata={setactualdata} fulldata={fulldata}/>}
    </div>
  )
}
