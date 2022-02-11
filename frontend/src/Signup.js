import React, { useState } from 'react';

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleChange = e => {
    const {username, value} = e.target
    setUsername(username)
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleChange}>
        <label>Username</label>
        <input type="text" value={username} />

        <label>Email</label>
        <input type="text" value={email}/>
        
        <label>Password</label>
        <input type="text" value={password}/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Signup