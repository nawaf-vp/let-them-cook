import React from 'react'
import {Navbar,Login,Register } from './components'

const Auth = () => {
  return (
    <div className="auth">
      <Login/>
      <Register/>
    </div>

  )
}

export default Auth