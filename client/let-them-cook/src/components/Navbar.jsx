import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home </Link>
      <Link to="/createRecepies">     <tr/><tr/>  Cearte Recipes </Link>
      <Link to="/savedRecipes">      <tr/><tr/>saved Recipes </Link>
      <Link to="/auth">    <tr/><tr/>    sign/signup </Link>
    </div>
  )
}

export default Navbar