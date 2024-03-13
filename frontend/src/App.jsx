import React from 'react'
import { Toaster } from 'react-hot-toast'
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
     <Toaster
     position="bottom-left"
     reverseOrder={true}
   />
    </div>
  )
}
