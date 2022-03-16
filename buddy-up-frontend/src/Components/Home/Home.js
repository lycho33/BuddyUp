import React from 'react'
import { connect, useSelector } from 'react-redux'
import { allUsers } from '../../redux/action'

const Home = ({ allUsers }) => {

  const users = useSelector(state => state.all)
  const usernames = users.map(user => <h3>{user.username}</h3>)

  return (
    <div>
      <br />
      Home <br /><br />
      {usernames}
      </div>
  )
}

export default connect(null, { allUsers })(Home)