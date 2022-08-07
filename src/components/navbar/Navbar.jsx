

import React from 'react'
import logo from "../images/logo.png"
import "./navbar.css"
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='imageLogo'>
        <img src={logo} />
      </div>
      <div className='right'>
        <div><button>Sign Out</button></div>
        <div className='LoginData'>
          <img />
          <span>Name</span>
        </div>
      </div>
    </div>
  )
}



