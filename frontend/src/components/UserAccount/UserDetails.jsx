import React,{useState,useEffect} from 'react'
import { Avatar} from 'antd'
import {fetchuserdata,getsaverecipe} from './fetchfunctions'
import DataItems from './DataItems'
import Results from '../../../Results'

export default function UserDetails() {
  const [userdata,setuserdata]=useState([])
  const [loader,setloader]=useState(false)
  useEffect(()=>{
    fetchuserdata(setuserdata,setloader)
  },[])
  
  return (
    <div className='container mt-4'>
   {
    userdata.length > 0&&<Details data={userdata}/>
   }
    </div>
  )
}
const Details=({data})=>{
  return(
    <div>
    {
      data.map((dataitems,index)=>{
        const{username,email}=dataitems
        return(
          <div className='container' key={index}>
          <div className='row'>
          <div className='col-4 text-center '>
          <Avatar
          style={{
           backgroundColor:'#ffbf00'
         }}
         size={70}
         gap={20}
       > {username.charAt(0)} </Avatar>
       
          </div>
          <div className=' col-4 d-inline-block '>
          <h4  >{username}</h4>
          <p>{email}</p></div>
          </div>
          </div>
        )

      })
    }
    <h4 className='mt-3 text-end border-bottom border-5 border-danger'>SavedRecipes</h4>
    <SavedRecipes/>
    </div>
  )
}
const SavedRecipes=()=>{
  const [savedrecipes,setsavedrecipes]=useState([])
  const [loader,setloader]=useState(false)
  useEffect(()=>{
    getsaverecipe(setsavedrecipes,setloader)
  },[])
  console.log(savedrecipes)
  return(
    <div className='text-danger'>
    {
      savedrecipes.length > 0 ? <DataItems actualdata={savedrecipes}/>:<Results title='No saved recipes found' subTitle='if you want go to recipes'/>
    }
    </div>
  )
}