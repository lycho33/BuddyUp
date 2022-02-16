import './App.css';
import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './registrations/Login'
import SignUp from './registrations/Signup'

const App = () => {
  
  const [state, setState] = useState({
    isLoggedIn: false,
    user: ''
  })
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [user, setUser] = useState('')


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
    setState({
      isLoggedIn: true,
      user: data.state.user
    })
    // setIsLoggedIn(true)
    // setUser(data.state.user)
  }

  const handleLogout = () => {
    setState({
      isLoggedIn: false,
      user: ''
    })
  }


  return (
    <div className="App">
      <h1>APP</h1>
      <Routes>
        <Route exact path='/' element={<Home props={state} loggedInStatus={state.isLoggedIn} />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
