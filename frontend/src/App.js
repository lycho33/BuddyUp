import './App.css';
import React, { useState, useEffect } from "react"
import { Route, Routes } from 'react-router-dom'
import SignUp from './registrations/Signup'
import Home from './Home'
import Login from './registrations/Login'
import { loginStatus } from './redux/actionCreators';
import { connect, useSelector } from 'react-redux'
import Logout from './registrations/Logout';



const App = () => {
  
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')

  const isLoggedIn = useSelector((state) => state.isLoggedIn)


  useEffect(() => {
    loginStatus()
  }, [])

  // const loginStatus = () => {
  //   axios.get('http://localhost:3001/logged_in', 
  //   {withCredentials: true})
    

  //   .then(response => {
  //     if (response.data.logged_in) {
  //       handleLogin(response)
  //     } else {
  //       handleLogout()
  //     }
  //   })
  //   .catch(error => console.log('api errors:', error))
  // }

  // const handleLogin = (data) => {
  //   setIsLoggedIn(true)
  //   setUser(data.user)
  //   console.log(data)
  // }

  // const handleLogout = () => {
  //   setIsLoggedIn(false)
  //   setUser('')
  // }


  return (
    <div className="App">
      <h1>APP</h1>
      <Routes>
        <Route exact path='/' element={<Home  loggedInStatus={isLoggedIn} />} />
        <Route exact path='/login' element={<Login  loggedInStatus={isLoggedIn} />} />
        <Route exact path='/signup' element={<SignUp  loggedInStatus={isLoggedIn} />} />
        <Route exact path='/logout' element={<Logout />} />
      </Routes>
      
    </div>
    
  );
}


export default connect(null , { loginStatus })(App);