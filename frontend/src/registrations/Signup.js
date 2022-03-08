import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'
import { signup } from '../redux/actionCreators'
import { connect } from 'react-redux'


function Signup({ handle, signup }) {

  let navigate = useNavigate();

  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation:'',
})

const handleInputChange = (e) => {
  setState((prevProps) => ({
      ...prevProps,
      [e.target.name]: e.target.value
  }))
}

const handleSubmit = (e) => {
  e.preventDefault()
  signup(state)
  navigate('/')
}

// const redirect = () => {
//   navigate('/')
// }


  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" name="username" value={state.username} onChange={handleInputChange}/>
            <input type="text" placeholder="email" name="email" value={state.email} onChange={handleInputChange}/>
            <input type="password" placeholder="password" name="password" value={state.password} onChange={handleInputChange}/>
            <input type="password" placeholder="password_confirmation" name="password_confirmation" value={state.password_confirmation} onChange={handleInputChange}/>
            <button placeholder="submit" type="submit">SignUp</button>
                <br />
            <Link to='/login'>Log In</Link>
        </form>


    </div>
  )
}

export default connect( null, { signup }) (Signup)