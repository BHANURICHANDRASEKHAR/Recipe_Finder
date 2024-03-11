import React from 'react';
import logo from './assets/logo.png'
import { Link } from 'react-router-dom';
import './footer.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <React.Fragment>
  
    <div className='container-fluid'>
     
  <footer className="footer-distributed container footer-background">
 
  <div className="footer-left ">

 
   <img src={logo} />
   <p className="footer-links p-3">
   <Link to='/'>Home</Link>
   <Link to='/recipes'>Recipes</Link>
   <Link to='/about'>About us</Link>
  
   </p>
 </div>

 <div className="footer-center" style={{fontSize:'20px'}}>

   <div>
     <i className="fa fa-map-marker"></i>
     <p><span style={{fontSize:'20px'}}>dhiwancheruvu</span>rajahmundry,ap</p>
   </div>

   <div>
     <i className="fa fa-phone"></i>
     <p>+91123454787</p>
   </div>

   <div>
     <i className="fa fa-envelope"></i>
     <p><a href="mailto:support@company.com">test@gmail.com</a></p>
   </div>

 </div>

 <div className="footer-right">

   <p className="footer-company-about">
     <span>About the company</span>
     Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
   </p>

   <div className="footer-icons">

     <a href="#"><FaGithub/></a>
     <a href="#"><FaLinkedin/></a>
     

   </div>

 </div>
 <p className="footer-company-name text-dark m-3">RecipeShare © 2024</p>

</footer></div>
    </React.Fragment>
   )
}
