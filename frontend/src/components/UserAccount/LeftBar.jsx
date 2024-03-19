import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { data } from './data.js';

export default function LeftBar() {
  const location = useLocation();
  const items = location.pathname.split('/');
  
  return (
    <div className='userdetails-left '>
      <ul className='div1'>
        {data.map((dataitems, index) => {
          const { name, link, id } = dataitems;
         
          return (
            <NavLink to={`/account/${link}`} key={index}>
              <li className={items[2] === link ? 'active1' : ''}>{name}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}
