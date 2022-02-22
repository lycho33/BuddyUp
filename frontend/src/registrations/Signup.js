import React, { useState } from 'react';
import Form from '../Components/Form/Form';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'


function Signup({ handle }) {

  let navigate = useNavigate();

  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation:'',
    errors:''
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
      password_confirmation: state.password_confirmation,
  }

  axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
      .then(r => {
          if(r.data.status === 'created'){
              handle(r.data)
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

export default Signup