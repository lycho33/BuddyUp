import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import ConversationList from './components/ConversationList'

function Home({ loggedInStatus }) {


  { if(loggedInStatus){
    return(
      <div>
        <Link to="/logout">Logout</Link>
        <ConversationList />
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

export default Home