import React, { useState, useEffect } from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'

function Login() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div>
        <h1>Log In</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" name="username" value={username} onChange={handleChange}/>
            <input type="text" placeholder="email" name="email" value={email} onChange={handleChange}/>
            <input type="text" placeholder="password" name="password" value={password} onChange={handleChange}/>
            <button placeholder="submit" type="submit">Log In</button>

            <Link to='/signup'>Sign Up</Link>
        </form>
    </div>
  )
}

export default Login