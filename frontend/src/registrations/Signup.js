import React, { useState } from 'react';
import Form from '../Components/Form/Form';


function Signup() {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
})


  return (
    <div>
      <h1>Signup</h1>

      {/* <form onSubmit={handleChange}>
        <label>Username</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>

        <label>Email</label>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        
        <label>Password</label>
        <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>

        <label>Password Confirmation</label>
        <input type="text" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}/>

        <button type='submit'>Sign Up</button>
      </form> */}


    </div>
  )
}

export default Signup