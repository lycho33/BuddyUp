import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ path, name, handle }) => {
  return (
    <div>
      <Link to={path} onClick={handle}>{name}</Link>
    </div>
  )
}

export default NavItem