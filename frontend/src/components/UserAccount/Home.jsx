import React, { useEffect, useContext  } from 'react';
import { Outlet,useOutlet,redirect,useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext';
import './home.css'
import LeftBar from './LeftBar';
import Faq from './Faq';
import { errorfunction } from '../../toaster';
const Home = () => {
  const { user, setUser } = useContext(UserContext); 
  const navigate=useNavigate()
 useEffect(()=>{
  if(!user)
  {
    errorfunction('You must Login to visit this')
    navigate('/')
  }
 },[])
 const userlayout =useOutlet()
  return (
    <div className='container home bg-white text-dark  mt-5 '>
   <div className='row'>
   <div className="col-sm-4 mt-4 userdetails">
   <LeftBar/>
</div>
<div className="col-sm-8 leftbar mt-4">
   {
    userlayout? <Outlet/>:<Faq/>
   }
</div>

   </div>
    </div>
  );
};

export default Home;

