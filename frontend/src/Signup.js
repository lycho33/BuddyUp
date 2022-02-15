import React, { useState } from 'react';

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleChange = e => {
    debugger
    const {username, value} = e.target
    setUsername(value)
  }

  const handleName = e => {
    setUsername(e.target.value)
  }

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleChange}>
        <label>Username</label>
        <input type="text" value={username} onChange={handleName}/>

        <label>Email</label>
        <input type="text" value={email} onChange={handleEmail}/>
        
        <label>Password</label>
        <input type="text" value={password} onChange={handlePassword}/>

        <button type='submit'>SignUp</button>
      </form>
    </div>
  )
}

export default Signup