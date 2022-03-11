import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import { autoLogin } from './redux/action'
import { allUsers } from './redux/action'

function App({ autoLogin, allUsers }) {

  useEffect(() => {
    autoLogin()
  }, [])
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        {/* <Route exact path='/logout' element={<Logout />} /> */}
      </Routes>
    </div>
  );
}

export default connect(null, { autoLogin, allUsers })(App);
