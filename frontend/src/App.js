import './App.css';
import React, { useState, useEffect } from "react"
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './Signup'

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
        this.handleLogin(response)
      } else {
        this.handleLogout()
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
      <SignUp/>

      <Routes>
        <Route exact path='/' element={} />
        <Route exact path='/login' element={} />
        <Route exact path='/signup' element={} />
      </Routes>
    </div>
  );
}

export default App;
