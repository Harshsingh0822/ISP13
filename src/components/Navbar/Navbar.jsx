import React from 'react'
import FMlogo from '../../assets/Images/FM_Logo.png'
// import NavRight from '../../elements/Nav-Right/Nav-Right'
import { NavLink } from "react-router-dom"
import './Navbar.css'


export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className='Nav-logo'>
       <img className='img2' src={FMlogo} alt='asd' />
       <span className='logoName'>FARMMATE</span>
      </div>
      <div className='Nav-butt'>
      <NavLink className="xyz"  to="/">Home</NavLink>
      <NavLink className="xyz"  to="/">About</NavLink>
      <NavLink className="xyz"  to="/">Contact</NavLink>
      <NavLink className="xyz"  to="/SignIn">Login</NavLink>
      </div>
  

    </div>
  )
}
