

import React from 'react'
import logo from "../images/logo.png"
import { BiImages } from 'react-icons/bi';
import "./navbar.css"
export const Navbar = ({detail}) => {
  return (
    <div className='navbar'>
      <div className='imageLogo'>
        <img src={logo} />
      </div>
      <div className='right'>
        <div className='navright'><button>Sign Out</button></div>
        <div className='LoginData'>
          <BiImages/>
          <span >{detail.full_name}</span>
        </div>
      </div>
    </div>
  )
}



