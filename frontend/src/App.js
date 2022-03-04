import './css/App.css';
import React, { useState, useEffect } from "react"
import { Route, Routes } from 'react-router-dom'
import SignUp from './registrations/Signup'
import Home from './Home'
import Login from './registrations/Login'
import { loginStatus } from './redux/actionCreators';
import { connect, useSelector } from 'react-redux'
import Logout from './registrations/Logout';



const App = () => {
  
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const user = useSelector(state => state.user)


  // useEffect(() => {
  //   loginStatus()
  // }, [])

  return (
    <div className="App">
      <h1>APP</h1>
      <Routes>
        <Route exact path='/' element={<Home  loggedInStatus={isLoggedIn} user={user} />} />
        <Route exact path='/login' element={<Login  loggedInStatus={isLoggedIn} />} />
        <Route exact path='/signup' element={<SignUp  loggedInStatus={isLoggedIn} />} />
        <Route exact path='/logout' element={<Logout />} />
      </Routes>
      
    </div>
    
  );
}


export default connect(null , { loginStatus })(App);