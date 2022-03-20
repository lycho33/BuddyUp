import React from 'react'
import NavItem from '../NavItem/NavItem'
import { logoutUser } from '../../redux/action'
import { connect, useSelector } from 'react-redux'
import '../../css/Navbar.css'

const Navbar = ({ logoutUser }) => {

  const user = useSelector(state => state.user)

  const logout = () => {
    localStorage.removeItem('token')
    logoutUser()
  }

  if(user.id){
    return(
      <div className='nav-container'>
        <div className='conversation-nav-container'>
          <NavItem path='/conversations' name='All Convos' />
          <NavItem path='/conversations/new' name='Create Convos'  />
        </div>
        <div className='registrations'>
          <NavItem path='/' name='Logout' handle={logout} />
        </div>
      </div>
    )
  } else {
    return (
      <div className='nav-container'>
        <div className='registrations-login'>
          <NavItem path='/login' name='Login' />
          <NavItem path='/signup' name='Signup' />
        </div>
      </div>
    )
  }
  }


export default connect(null, { logoutUser })(Navbar)