import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
//import {home , auth, createRecipe, savedRecipes } from './pages/index'


import './index.css'
import Auth from './pages/auth'
import Home from './pages/home'
import CreateRecipe from './pages/createRecipe'
import SavedRecipes from './pages/savedRecipes'


function App() {
 
  return (
    <div className='App'>
    <Router>
      <Navbar/> 
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/auth' element={<Auth/>}/>
         <Route  path='/createRecepies' element={<CreateRecipe/>} />
         <Route  path='/savedRecipes' element={<SavedRecipes/>}/>
      </Routes>
    </Router>
     
    </div>
  )
}

export default App
