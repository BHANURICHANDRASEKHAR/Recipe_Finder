import { useEffect, useState } from "react"
import { getcontributes } from "./fetchfunctions"
import DataItems from './DataItems'
import Results from "../../../Results"
import Loader from '../../Loader'

export default function MyContributes() {
  const [data,setdata]=useState([])
  const [loader,setloader]=useState(false)
  useEffect(()=>{
    getcontributes(setdata,setloader)
  },[])
  
  return (
    <div className='container mt-4'>
    <h3 className='mt-3  border-bottom border-5 border-danger'>MyContributes</h3>
    {
      loader&&<Loader/>
    }
    {data.length > 0 ? <DataItems actualdata={data}/>:<Results title='No Contributes are found' subTitle='if you want Contribute Click this'/>
  }
    </div>
  )
}
