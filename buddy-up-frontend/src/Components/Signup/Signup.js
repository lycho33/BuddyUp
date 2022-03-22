import React, { useState } from 'react'
import { register } from '../../redux/action'
import { connect } from 'react-redux'
import '../../css/Registrations.css'

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
  console.log(state)
  register(state)
  // navigate('/')
}

  return (
    <div className='registrations-container'>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit} className='registrations-form'>
        <input type="text" placeholder="username" name="username" value={state.username} onChange={handleInputChange}/>
        <input type="text" placeholder="email" name="email" value={state.email} onChange={handleInputChange}/>
        <input type="password" placeholder="password" name="password" value={state.password} onChange={handleInputChange}/>
        {/* <input type="password" placeholder="password_confirmation" name="password_confirmation" value={state.password_confirmation} onChange={handleInputChange}/> */}
        <button placeholder="submit" type="submit">Sign Up</button>
  </form>
    </div>
  )
}

export default connect( null, { register })(Signup)