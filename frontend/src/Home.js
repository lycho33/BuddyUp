import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>HOME</h1>
        <Link to='/login'>Log In</Link>
            <br></br>
        <Link to='/signup'>Sign Up</Link>
    </div>
  )
}

export default Home