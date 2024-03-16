import React from 'react'
import { Toaster } from 'react-hot-toast'
import Rout from './components/Navbar/Rout'
import AOS from 'aos'
import { useEffect } from 'react'
import UserContUserContextProviderext  from './Context/UserContext'
import Footer from './Footer'
export default function App() {

  useEffect(() => {
    AOS.init({ 
       duration: 2000
     });
  }, []);
  useEffect(()=>{
    
  },[])
  return (
    <UserContUserContextProviderext>
    <App1/>
    </UserContUserContextProviderext>
    
  )
}

const App1 = () => {
  return (
    <React.Fragment>
      <Rout/>
      <Footer/>
      <Toaster
        position="bottom-left"
        reverseOrder={true}
      />
    </React.Fragment>
  );
}
