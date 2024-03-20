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
  
  
   </p>
 </div>

 <div className="footer-center" style={{fontSize:'20px',textTransform:'capitalize'}}>

   <div>
     <i className="fa fa-map-marker"></i>
     <p><span style={{fontSize:'20px'}}>dhiwancheruvu</span>rajahmundry,ap</p>
   </div>

   <div>
     <i className="fa fa-phone"></i>
     <p>+91 123456789</p>
   </div>

   <div>
     <i className="fa fa-envelope"></i>
     <p><a href="mailto:bhanurichandu@gmail.com">bhanurichandu@gmail.com</a></p>
   </div>

 </div>

 <div className="footer-right">

   <p className="footer-company-about">
     <span>About the company</span>
     "At RecipeShare, we're all about delicious recipes and community. Join us to share, discover, and enjoy cooking together!"
   </p>

   <div className="footer-icons">

     <a href="https://github.com/BHANURICHANDRASEKHAR"><FaGithub/></a>
     <a href="https://www.linkedin.com/in/murali-undela-6311a8269/"><FaLinkedin/></a>
     

   </div>

 </div>
 <p className="footer-company-name text-dark m-3">RecipeShare © 2024</p>
 <p className="footer-company-name text-dark m-3 text-center lead">Developed By U.Murali && B.Chandu</p>

</footer></div>
    </React.Fragment>
   )
}
