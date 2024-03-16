import React,{ lazy,Suspense   } from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from '../Home/HomePage'
import Navbar from './Narbar'
import Loader from '../../Loader'
import About from '../About/About'

//dynamic imports
const Home=lazy(()=>import('../Recipes/typerecipes/Home'))
const  RecipeHomePage=lazy(()=>import( '../Recipes/Home'))
const IndivudualRecipeHomePage=lazy(()=>import('../indivudualRecipe/Home'));
const UserHomepage=lazy(()=>import('../UserAccount/Home'))
export default function Rout() {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/recipes' element={<Suspense fallback={<Loader/>}><RecipeHomePage/></Suspense>} />
      <Route path='/recipes/:type' element={<Suspense fallback={<Loader/>}><Home/></Suspense>} />
      <Route path='/recipe/:name' element={<Suspense fallback={<Loader/>}><IndivudualRecipeHomePage/></Suspense>} />
      <Route path='/account'  element={<Suspense fallback={<Loader/>}><UserHomepage/></Suspense>} />
      </Routes>
      </React.Fragment>
  )
}
