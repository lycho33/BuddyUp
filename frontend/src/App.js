import './App.css';
import React, { useState } from "react"
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './Signup'

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')

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
