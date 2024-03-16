
import React,{useState,useContext, useEffect} from 'react'
import { IoMenu } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { UserContext } from '../../Context/UserContext';
import './navbar.css'
import gettoken,{clearcookie} from '../Login/gettoken'
import {Cookies} from 'cookies-js' 
import Login from '../Login/Login';
export default function Narbar() {
  const [flag,setflag]=useState(true)
  const { user, setUser } = useContext(UserContext); 
  function logout()
  {
    clearcookie()
    setUser(false)
  }
  useEffect(()=>{
   const token= gettoken()
   if(token)
   {
    setUser(true)
   }
   else{
    setUser(false)
   }
  },[user])
  setUser(true)
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
     {
      user?  <button className='btn btn-outline-info m-3' onClick={logout}>logout</button>:
      <NavLink ><Login/></NavLink>
     }
    
  
  </div>
</div> 
  </div>
  )
}
