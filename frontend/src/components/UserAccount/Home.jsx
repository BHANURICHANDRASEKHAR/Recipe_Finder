import React, { useEffect } from 'react';
import Avatar from 'antd/es/avatar/avatar';
import { Outlet,useOutlet } from 'react-router-dom'
import './home.css'
import LeftBar from './LeftBar';
import Faq from './Faq';

const Home = () => {
const userlayout =useOutlet()

  return (
    <div className='container home bg-white text-dark  mt-5 '>
   <div className='row'>
   <div className="col-sm-4 mt-4 userdetails">
   <LeftBar/>
</div>
<div className="col-sm-8 mt-4">
   {
    userlayout? <Outlet/>:<Faq/>
   }
</div>

   </div>
    </div>
  );
};

export default Home;

