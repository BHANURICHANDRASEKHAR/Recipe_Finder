import React from 'react'

import { BsFillHeartPulseFill } from "react-icons/bs";
import { PiBowlFoodLight } from "react-icons/pi";
import Chartmodal from './ChartModal';
export default function Icons({calories}) {
  return (
    <div className='container mt-5'>
    <div className='row'>
    <div className='col-4'>
    <BsFillHeartPulseFill className=' icon1'/>
    <h4 className='mt-2'>{calories || '250'}</h4>
    </div>
    <div className='col-4 text-center'>
    <PiBowlFoodLight className='icon1 text-white'/>
    <h4 className='mt-2 '>Serving</h4>
    </div>
    <div className='col-4 text-center'>
    <Chartmodal/>
    </div>
    </div>
    </div>
  )
}
