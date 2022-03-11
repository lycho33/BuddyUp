import React from 'react'
import NavItem from '../NavItem/NavItem'
import { logoutUser } from '../../redux/action'
import { connect, useSelector } from 'react-redux'

const Navbar = ({ logoutUser }) => {

  const user = useSelector(state => state.user)

  const logout = () => {
    localStorage.removeItem('token')
    logoutUser()
  }

  if(user.id){
    return(
      <div>
        <NavItem path='/' name='logout' handle={logout} />
      </div>
    )
  } else {
    return (
      <div>
        <NavItem path='/login' name='Login' />
        <NavItem path='/signup' name='Signup' />
      </div>
    )
  }
  }


export default connect(null, { logoutUser })(Navbar)