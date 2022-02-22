import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios'

function Home({ loggedInStatus, handle }) {

  let navigate = useNavigate();

  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      console.log(response)
      handle()
      navigate('/')
    })
    .catch(error => console.log(error))
  }

  { if(loggedInStatus){
    return(
      <div>
        <button onClick={handleClick}>Logout</button>
      </div>
    )
  } else {
    return(
      <div>
        <Link to='/login'>Log In</Link>
        <br></br>
        <Link to='/signup'>Sign Up</Link>
      </div>

    )
  }

}

  // return (
    
  //   <div>

  //       {/* <h1>HOME</h1>
  //       <Link to='/login'>Log In</Link>
  //       <br></br>
  //       <Link to='/signup'>Sign Up</Link> */}
  //   </div>
  // )
}

export default Home