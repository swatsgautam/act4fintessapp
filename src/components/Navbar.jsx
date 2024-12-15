import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
<nav className="navbar">
      <NavLink to="/" className="logo">
        <h1>Act4 Fitness</h1>
      </NavLink>
      <div>
        <NavLink to="/my-stats">My Stats</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
