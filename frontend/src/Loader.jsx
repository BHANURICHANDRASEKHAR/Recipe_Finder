import React from 'react'
// import gif from './assets/giphy.gif'
import './loader.css'
export default function Loader() {
  return (
    // <div className='d-flex justify-content-center align-items-center h-100'>
    // <div className='loader align-content-sm-between mt-5'><img src={gif} /></div>
    // </div>
    <div className="loader">
    <span className="inner-loader"></span>
    <span className="span1"></span>
    <span className="span2"></span>
</div>
  )
}
