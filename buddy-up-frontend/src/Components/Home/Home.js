import React from 'react'
import { connect, useSelector } from 'react-redux'
import { allUsers } from '../../redux/action'
import octoCat from '../../images/octoCat.png'
import '../../css/Home.css'
import { BiWinkSmile } from 'react-icons/bi';

const Home = ({ allUsers }) => {

  const users = useSelector(state => state.all)
  const usernames = users.map(user => 
    <h4>< BiWinkSmile className='user-list-icon'/> {user.username}</h4>
  )

  return (
    <div className='home-container'>
      <img src={octoCat} alt="" />
      {(users.length === 0) 
        ?
          <div className='description'>
            <span className='welcome'><h1>Welcome</h1></span>
            <h1>Come join us to chat and meet new friends</h1>
          </div>
        :
          <div className='users-list'>
            <h3>Current Users:</h3>
            {usernames}
          </div>
      }
      </div>
  )
}

export default connect(null, { allUsers })(Home)