import './App.css';
import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Router, Route, Routes } from 'react-router-dom'
import SignUp from './registrations/Signup'
import Home from './Components/Home/Home'
import Login from './registrations/Login'



const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')


  useEffect(() => {
    loginStatus()
  })

  const loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
    {withCredentials: true})
    

    .then(response => {
      if (response.data.logged_in) {
        handleLogin(response)
      } else {
        handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  const handleLogin = (data) => {
    setIsLoggedIn(true)
    setUser(data.user)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser('')
  }


  return (
    <div className="App">
      <h1>APP</h1>
      <Routes>
        <Route exact path='/' element={<Home props={handleLogin, handleLogout, user} loggedInStatus={isLoggedIn} />} />
        <Route exact path='/login' element={<Login handle={handleLogin} loggedInStatus={isLoggedIn} />} />
        <Route exact path='/signup' element={<SignUp props={isLoggedIn, user} loggedInStatus={isLoggedIn} />} />
      </Routes>
      
    </div>
    
  );
}

export default App;
