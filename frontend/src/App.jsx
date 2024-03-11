import React from 'react'
import tomoto from './assets/tomoto.png'
import mint from './assets/mint.png'
import Narbar from './components/Navbar/Narbar'
import Rout from './components/Navbar/Rout'
import AOS from 'aos'
import { useEffect } from 'react'
import Footer from './Footer'
export default function App() {
  useEffect(() => {
    AOS.init({ 
       duration: 2000
     });
   });
  return (
    <div>
     <Rout/>
     <Footer/>
    </div>
  )
}
