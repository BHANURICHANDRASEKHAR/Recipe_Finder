
import React,{useState} from 'react'
import { IoMenu } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './navbar.css'
import Login from '../Login/Login';
export default function Narbar() {
  const [flag,setflag]=useState(true)
  console.log('navbar rendered')
  return (
  <div className='container-fluid homepage '>
  <div className="nav container bg-transparent ">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
<div className="nav-title text-white">
<img src={logo}/>
</div>
</div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
    {
      flag? <IoMenu onClick={()=>{setflag((prev)=>!prev)}} className='text-white' style={{fontSize:'26px'}}/>:<GiCancel onClick={()=>{setflag((prev)=>!prev)}} className='text-white' style={{fontSize:'26px'}}/>
    }
    </label>
  </div>

  <div className="nav-links1  ">
    <NavLink to="/"> Home</NavLink>
    <NavLink to='/recipes'>Recipes</NavLink>
     <NavLink to='/about'>About Us</NavLink>
     <NavLink ><Login/></NavLink>
    <button className='btn btn-outline-info m-3'>logout</button>
   
  </div>
</div> 
  </div>
  )
}
