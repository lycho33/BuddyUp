import React, { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { getConversations } from '../../redux/action'
import { Link } from 'react-router-dom'

const Conversations = ({ getConversations }) => {

  useEffect(() => {
    getConversations()
  }, [])

  const convos = useSelector(state => state.conversations)
  const all = convos.map(c => <Link to={`/conversations/${c.id}`}><h3>{c.title}</h3></Link>)

  return (
    <div>
      <br />
      Conversations
      {all}
    </div>
    
  )
}

export default connect( null, { getConversations })(Conversations)