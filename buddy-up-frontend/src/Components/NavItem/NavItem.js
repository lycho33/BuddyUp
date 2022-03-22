import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Navbar.css'

const NavItem = ({ path, name, handle, className }) => {
  return (
    <div>
      <Link to={path} onClick={handle} className={className}>{name}</Link>
    </div>
  )
}

export default NavItem