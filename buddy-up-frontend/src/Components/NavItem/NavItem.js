import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Navbar.css'

const NavItem = ({ path, name, handle }) => {
  return (
    <div>
      <Link to={path} onClick={handle} className="convo-link">{name}</Link>
    </div>
  )
}

export default NavItem