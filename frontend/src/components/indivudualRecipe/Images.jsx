import React from 'react'
import Icons from './Icons'
import { MdOutlineAddCircle } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { success } from '../../toaster';
export default function Images({data,languageData}) {
  return (
    <div className='row mt-3'>
              <div className='col-sm-6'>
                <div className='card mt-2'>
                  <img className='card-img-top recipe-img' src={data.img}  alt='img not found' /><FaHeart className='savebutton' onClick={()=>{success()}}/>
                </div>
              </div>
              <div className='col-sm-6 mt-3 '>
              <h4 className='lead item-name d-block w-90'><FaDirections/>  Directions to Prepare </h4>

              {languageData.data1.map((items, innerIndex) => (
                <p key={innerIndex} className='mt-4 bg-transparent'><MdOutlineAddCircle className='text-success icons'/>{items}</p>
              ))}
            <Icons calories={data.calories}/>
            </div>    
            </div>
  )
}
