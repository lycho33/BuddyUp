import React from 'react'
import {Link} from 'react-router-dom'
import ConversationsList from './components/ConversationList';


function Home() {
  return (
    <div>
        <h1>HOME</h1>
        <Link to='/login'>Log In</Link>
            <br></br>
        <Link to='/signup'>Sign Up</Link>
        <br />
        <ConversationsList />
    </div>
  )
}

export default Home