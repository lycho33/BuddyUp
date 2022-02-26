import './App.css';
import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import SignUp from './registrations/Signup'
import Home from './Home'
import Login from './registrations/Login'



const App = () => {
  
  const [state, setState] = useState({
    isLoggedIn: false,
    user: ''
  })
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [user, setUser] = useState('')


  useEffect(() => {
    axios.get('http://localhost:3001/logged_in', 
    {withCredentials: true})
    
    .then(response => {
      if (response.data.logged_in) {
        console.log(response)
        handleLogin(response)
      } else {
        handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
    // loginStatus()
  }, [])

  const handleLogin = (data) => {
    // setIsLoggedIn(true)
    // setUser(data.user)
    setState({
      isLoggedIn: true,
      user: data.user
    })
    // console.log(data)
  }

  const handleLogout = () => {
    setState({
      isLoggedIn: false,
      user: ''
    })
    // setIsLoggedIn(false)
    // setUser('')
  }


  return (
    <div className="App">
      <h1>APP</h1>
      <Routes>
        <Route exact path='/' element={<Home handle={handleLogout} loggedInStatus={state.isLoggedIn} />} />
        <Route exact path='/login' element={<Login handle={handleLogin} loggedInStatus={state.isLoggedIn} />} />
        <Route exact path='/signup' element={<SignUp handle={handleLogin} loggedInStatus={state.isLoggedIn} />} />
        
      </Routes>
      
    </div>
    
  );
}

export default App;
