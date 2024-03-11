import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from '../Home/HomePage'
import RecipeHomePage from '../Recipes/Home'
import Navbar from './Narbar'
export default function Rout() {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/recipes' element={<RecipeHomePage/>}/>

      </Routes>
      </React.Fragment>
  )
}
