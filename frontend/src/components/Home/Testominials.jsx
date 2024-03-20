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
    <div className='card-body text-justify w-100 text-wrap'> <p style={{textWrap:'pretty'}}> "At <i>RecipeShare</i>, we take pride in providing a platform where culinary enthusiasts from around the world come together to share their passion for cooking. Our community-driven approach ensures that every recipe shared on our website is a labor of love, crafted by our dedicated users. But don't just take our word for it – hear what our customers have to say about their experiences with us. From novice cooks to seasoned chefs, our users appreciate the diverse range of recipes, the supportive community atmosphere, and the invaluable cooking tips shared by fellow members. Join us on this delicious journey and discover why our customers keep coming back for more!   </p>
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