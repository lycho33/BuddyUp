import React, { useState } from 'react'
import { register } from '../../redux/action'
import { connect } from 'react-redux'

const Signup = ( { register } ) => {

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
  let user = 
  console.log(state)
  register(state)
  // navigate('/')
}

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" name="username" value={state.username} onChange={handleInputChange}/>
        <input type="text" placeholder="email" name="email" value={state.email} onChange={handleInputChange}/>
        <input type="password" placeholder="password" name="password" value={state.password} onChange={handleInputChange}/>
        {/* <input type="password" placeholder="password_confirmation" name="password_confirmation" value={state.password_confirmation} onChange={handleInputChange}/> */}
        <button placeholder="submit" type="submit">SignUp</button>
  </form>
    </div>
  )
}

export default connect( null, { register })(Signup)