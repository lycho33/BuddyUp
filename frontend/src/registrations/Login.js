import React, { useState, useEffect } from "react"
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function Login({handleLogin, handleLogout, user}) {

    let navigate = useNavigate();

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

        let user = {
            username: state.username,
            email: state.email,
            password: state.password,
        }

        axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
            .then(r => {
                if(r.data.logged_in){
                    handleLogin(r.data)
                    redirect()
                } else {
                    setState({
                        errors: r.data.errors
                    })
                }
            })
            .catch(error => console.log('api errors:', error))
    }

    const redirect = () => {
        navigate('/')
    }
 
  return (
    <div>
        <h1>Log In</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" name="username" value={state.username} onChange={handleInputChange}/>
            <input type="text" placeholder="email" name="email" value={state.email} onChange={handleInputChange}/>
            <input type="text" placeholder="password" name="password" value={state.password} onChange={handleInputChange}/>
            <button placeholder="submit" type="submit">Log In</button>
                <br />
            <Link to='/signup'>Sign Up</Link>
        </form>
    </div>
  )
}

export default Login