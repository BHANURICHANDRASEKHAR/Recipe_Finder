import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from '../Home/HomePage'
import RecipeHomePage from '../Recipes/Home'
import Navbar from './Narbar'
import IndivudualRecipeHomePage from '../indivudualRecipe/Home'
import Home from '../Recipes/typerecipes/Home'
export default function Rout() {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/recipes' element={<RecipeHomePage/>}/>
      <Route path='/recipes/:type' element={<Home/>}/>
      <Route path='/recipe/:name' element={<IndivudualRecipeHomePage/>}/>
      </Routes>
      </React.Fragment>
  )
}
