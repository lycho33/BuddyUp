import React from 'react'
import NavItem from '../NavItem/NavItem'
import { logoutUser } from '../../redux/action'
import { connect, useSelector } from 'react-redux'
import '../../css/Navbar.css'
import { GoOctoface } from "react-icons/go";

const Navbar = ({ logoutUser }) => {

  const user = useSelector(state => state.user)

  const logout = () => {
    localStorage.removeItem('token')
    logoutUser()
  }

  if(user.id){
    return(
      <div className='nav-container'>
        <div className='icon'>
          <NavItem path='/' name={< GoOctoface size={60}  className='home-icon' />}></NavItem>
          <h1>BuddyUp</h1>
        </div>
        <div className='conversation-nav-container'>
          <NavItem path='/conversations' name='All Convos' className='convo-link' />
          <NavItem path='/conversations/new' name='Create Convos'  className='convo-link' />
        </div>
        <div className='registration'>
          <NavItem path='/' name='Logout' handle={logout} className='resgistrations-logout' />
        </div>
      </div>
    )
  } else {
    return (
      <div className='nav-container'>
        <div className='icon' >
          <NavItem path='/' name={< GoOctoface size={60}  className='home-icon' />}></NavItem>
          <h1>BuddyUp</h1>
        </div>
        <div className='registrations'>
          <NavItem path='/login' name='Login' className='registrations-login' />
          <NavItem path='/signup' name='Signup' className='registrations-login' />
        </div>
      </div>
    )
  }
  }


export default connect(null, { logoutUser })(Navbar)