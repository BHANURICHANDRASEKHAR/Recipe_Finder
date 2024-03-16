import React, { useState,useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import Ratings from './Ratings'
import Avatar from 'antd/es/avatar/avatar'
import {store_comments_function} from './data'
import UserReview from './UserReviews'
export default function Review({itemsdata}) {
  const [reviewcount,setreviewscount]=useState([])
  return (
    <div  className='container-fluid-sm'>
    <div className='row'>
    <div className='col-sm review-card-parent'>
     <div className='review-card'>
     <div className='review-title '>
      <h5>Review {reviewcount}</h5>
     </div>
      <SetUserReview itemsdata={itemsdata} setreviewscount={setreviewscount}/>
    </div>
    
    </div>
    
    </div></div>  )
}
const SetUserReview=({itemsdata,setreviewscount})=>{
    const initialdata={
      content:'',
      rating:0,
    }
    const [reviewdata,setreviewdata]=useState(initialdata)
    const {setShow}=useContext(UserContext)
    const [show,setshow]=useState(false)
    const [count,setcount]=useState(0)
    function change()
    {
       setshow(true)
    }
    function submit()
    {
      store_comments_function(itemsdata[0]._id,reviewdata,setcount,setShow)
      setreviewdata(initialdata)
      setshow(false)
    }
    return(
    <div className='col'>
    <div  className='mt-5 user-review'>
    <div className='user-icon p-2'><Avatar size={30} className='bg-gray  text-dark text-black m-2'>U</Avatar></div>
    <div className='p-2'>
     <div className='show-card'>
       {
        show&&<div className='show-card-ratings'><Ratings reviewdata={reviewdata} setreviewdata={setreviewdata}/></div>
       }
    <input type='text ' className='textarea' value={reviewdata.content} onFocus={change} onChange={(e)=>setreviewdata({...reviewdata,['content']:e.target.value})} placeholder='Write You Review Or Comment here' />
   {
    show&& <div className='col'>
    <button className='btn btn-success  btn-sm mt-5 mr-5' onClick={submit}>Submit</button>
    <button className='btn accordion-itembtn-sm mt-5 ml-5' onClick={()=>setshow(false)}>Cancel</button>

    </div>
   }
    </div>
    </div>
    </div>
    <UserReview count={count} itemid={itemsdata[0]._id} setreviewscount={setreviewscount}/>
    </div>
    )
}
