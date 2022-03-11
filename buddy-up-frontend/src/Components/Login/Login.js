import React, { useState } from 'react'
import { login } from '../../redux/action'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = ( { login }) => {
  
  let navigate = useNavigate();
  
  const redirect = () => {
    navigate('/')
}

  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
  })

const handleInputChange = (e) => {
    setState((prevProps) => ({
        ...prevProps,
        [e.target.name]: e.target.value
    }))
  }

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
    login(state)
    redirect()
    
}
  return (
    <div>
      <h1>Log In</h1>

      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="username" name="username" value={state.username} onChange={handleInputChange}/>
          <input type="text" placeholder="email" name="email" value={state.email} onChange={handleInputChange}/>
          <input type="password" placeholder="password" name="password" value={state.password} onChange={handleInputChange}/>
          <button placeholder="submit" type="submit">Log In</button>
</form>
    </div>
  )
}

export default connect( null, { login })(Login)