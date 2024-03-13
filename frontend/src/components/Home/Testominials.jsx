import React from 'react'
import chef from '../../assets/chef.png'
import { logodata } from './data'
export default function Testominials() {
  return (
    <div className='container mt-5 bg-white p-3 rounded-5' style={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #FCFCFC 100%)' }}>
    <div className='row'>
    <div className='col-sm-6 position-relative'>
    <div className='chef'></div><img src={chef} className='chef-img'/>
    </div>
    <div className='col-sm-6 text-dark mt-5'>
    <h4 className='text-danger'>Testominials</h4>
    <h3>What Our Customers Say About Us</h3>
    <div className='card-body text-justify w-100 text-wrap'> <p style={{textWrap:'pretty'}}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper quam quis augue commodo, id aliquet libero sodales. Maecenas convallis elit luctus diam suscipit pulvinar quis et metus. Morbi a quam sollicitudin, luctus erat a, venenatis nisi. Sed rhoncus et sapien in ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus tincidunt, magna sit amet efficitur finibus, enim odio sodales velit, ac varius turpis  Nullam vehicula mauris eget quam efficitur, vel congue augue a varius gravida. Vestibulum nulla quam, dictum egestas blandit at, sagittis non odio. Nunc et ornare arcu. Pellentesque ipsum est, ultricies sed vulputate at, varius vel elit. Etiam congue blandit metus, vitae congue erat pharetra sit amet.r.    </p>
    </div>
    <Avatar/>
    </div>
    </div>
    </div>
  )
}
const Avatar=()=>{
    return(
        <div className='container d-flex'>
        {
        logodata.map((data1)=>{
            return(<div className='avatar' style={{backgroundImage:`url(${data1.img})`}} key={data1.id}></div>)
        })
        }
        <div style={{marginLeft:'10px'}}><h6 style={{fontSize:'20px'}}>Customer Feedback</h6><p style={{fontSize:'18px'}}><span className='text-warning' >✯</span>4.9 (18.6k Reviews)</p></div>
        </div>
    )
}