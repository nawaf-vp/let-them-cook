import React from 'react'
import {Navbar,Login,Register } from '../components/index'

const Auth = () => {
  return (
    <div className="auth">
      <Navbar/>
      <Login/>
      <Register/>
    </div>

  )
}

export default Auth