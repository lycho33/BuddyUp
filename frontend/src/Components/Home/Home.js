import React from 'react'
import { connect } from 'react-redux'
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
import { logout } from '../../redux/actionCreators'

function Home({ loggedInStatus, logout }) {

  let navigate = useNavigate()

  // const logout = () =>{
  //   axios.delete('http://localhost:3001/logout', {withCredentials: true})
  //   .then(response => {
  //       console.log(response)
  //       // dispatch({
  //       //     type:"LOGOUT",
  //       //     payload: response
  //       // })
        
  //   })
  //   .catch(error => console.log(error))
  // }
  


  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }

  { if(loggedInStatus){
    return(
      <div>
        <Link to="/logout">Logout</Link>
      </div>
    )
  } else {
    return(
      <div>
        <h1>Home</h1>
        <Link to='/login'>Log In</Link>
        <br></br>
        <Link to='/signup'>Sign Up</Link>
      </div>

    )
  }

}

}

export default connect( null, { logout }) (Home)