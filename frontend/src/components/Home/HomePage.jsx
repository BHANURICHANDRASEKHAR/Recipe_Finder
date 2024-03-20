import React from 'react'
import './home.css'
import home from '../../assets/home1.png'
import Testominials from './Testominials'
import CardItems from './CardItems'
import Loader from '../../Loader'
export default function HomePage() {

  return (
   <React.Fragment>
   <Content/>
   <CardItems/>
   <Testominials/>

   </React.Fragment>
  )
}
const Content=()=>{
    return(
        <div className='container-fliud homepage'>
        <div className='container pt-5 pb-5'>
        
        <div className='row'>
        <div className='col-sm-6 mt-4 '>
        <h1 className='text-center p-3 display-4' data-aos="flip-left"  >Get Cooking with <span className='text-warning'>RecipeShare</span> Today!</h1>
        <p className='text-center p-3 ' style={{fontSize:'20px'}} data-aos='flip-down' data-aos-duration="1800">Stirring Up Inspiration, One Recipe at a Time! Join our Culinary Community and Let the Flavor Fest Begin! 🌮🍰🍲</p>
        <div className='d-flex justify-content-center' data-aos='flip-up' data-aos-duration="1800"><button className='btn text-center btn-warning text-white' >Explore More</button>
        </div>
        </div>
        <div className='col-sm-6'  data-aos="fade-up-left" data-aos-duration="1800">
         <img src={home} className='img'/>
         </div>
         </div>
        </div>
        </div>
    )
}