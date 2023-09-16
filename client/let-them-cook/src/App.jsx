import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
//import {home , auth, createRecipe, savedRecipes } from './pages/index'


import './index.css'
import Auth from './pages/Auth'
import Home from './pages/Home'
import CreateRecipe from './pages/CreateRecipe'
import SavedRecipes from './pages/SavedRecipes'
import { Login , Navbar , Register } from './components'


function App() {
 
  return (
    <div className='App'>
    <Router>
       <Navbar/>  
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/auth' element={<Auth/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route  path='/createRecepies' element={<CreateRecipe/>} />
         <Route  path='/savedRecipes' element={<SavedRecipes/>}/>
      </Routes>
    </Router>
     
    </div>
  )
}

export default App
