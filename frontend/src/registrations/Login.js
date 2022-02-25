import React, { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import Form from '../Components/Form/Form'
import { login } from '../redux/actionCreators'
import { connect } from 'react-redux'

function Login({ handle, login }) {


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
        login(state)
        redirect()
        // let user = {
        //     username: state.username,
        //     email: state.email,
        //     password: state.password,
        // }

        

        // axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
        //     .then(r => {
        //         if(r.data.logged_in){
        //             handle(r.data)
        //             console.log(r)
        //             redirect()
        //         } else {
        //             setState({
        //                 errors: r.data.errors
        //             })
        //         }
        //     })
        //     .catch(error => console.log('api errors:', error))
    }

    const redirect = () => {
        navigate('/')
    }

    // const inputArr = [
    //     {type:"text", placeholder:"username", name:"username"},
    //     {type:"text", placeholder:"email", name:"email"},
    //     {type:'password', placeholder:"password", name:"password"}
    // ]
 
  return (
    <div>
        <h1>Log In</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" name="username" value={state.username} onChange={handleInputChange}/>
            <input type="text" placeholder="email" name="email" value={state.email} onChange={handleInputChange}/>
            <input type="password" placeholder="password" name="password" value={state.password} onChange={handleInputChange}/>
            <button placeholder="submit" type="submit">Log In</button>
                <br />
            <Link to='/signup'>Sign Up</Link>
        </form>
        
        {/* <Form handler={handleSubmit} input={inputArr} /> */}
        
        
    </div>
  )
}

export default connect(null, { login }) (Login)