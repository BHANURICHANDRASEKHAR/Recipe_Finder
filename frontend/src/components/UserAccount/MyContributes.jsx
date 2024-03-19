import { useEffect, useState } from "react"

export default function MyContributes() {
  const [data,setdata]=useState([])
  const [loader,setloader]=useState(false)
  
  return (
    <div className='container mt-4'>
    <h3 className='lead'>MyContributes</h3>
    </div>
  )
}
