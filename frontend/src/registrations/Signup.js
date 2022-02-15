import React, { useState } from 'react';

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleChange = e => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleChange}>
        <label>Username</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>

        <label>Email</label>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        
        <label>Password</label>
        <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup