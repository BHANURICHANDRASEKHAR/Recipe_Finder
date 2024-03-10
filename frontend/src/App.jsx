import React from 'react'
import tomoto from './assets/tomoto.png'
import mint from './assets/mint.png'
import Narbar from './components/Navbar/Narbar'
export default function App() {
  return (
    <div className='container bg-dark'>
   <Narbar/>
    <img src={tomoto} className='img'/>
    </div>
  )
}
