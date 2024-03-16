import React, { useEffect, useState } from 'react'
import Icons from './Icons'
import { MdOutlineAddCircle } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import {saverecipe,getsaverecipe} from './data'

export default function Images({data,languageData}) {
  const [flag,setflag]=useState(false)
  const [count,setcount]=useState(0)
  const [saveddata,setsaveddata]=useState([])
  useEffect(()=>{
    setflag(false)
    getsaverecipe(data,setflag,setsaveddata)
  },[count,data._id])
  return (
    <div className='row mt-3'>
              <div className='col-sm-6'>
                <div className='card mt-3'>
                  <img className='card-img-top recipe-img' src={data.img}  alt='img not found' /><FaHeart className='savebutton' style={{color:flag&&'red'}}  onClick={()=>{saverecipe(data,setcount,saveddata)}}/>
                </div>
              </div>
              <div className='col-sm-6 mt-3 display-sm-6'>
              <h4 className='lead item-name d-block w-90'><FaDirections/>Directions to Prepare </h4>

               {languageData.data1.map((items, innerIndex) => (
                <p key={innerIndex} className='mt-4 bg-transparent'><MdOutlineAddCircle className='text-success icons'/>{items}</p>
              ))}
            <Icons calories={data.calories}/>
            </div>    
            </div>
  )
}
