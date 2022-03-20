import React, { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { getConversations } from '../../redux/action'
import { Link } from 'react-router-dom'
import '../../css/Conversations.css'

const Conversations = ({ getConversations }) => {

  useEffect(() => {
    getConversations()
  }, [])

  const convos = useSelector(state => state.conversations)
  const all = convos.map(c => <div className='conversation'><Link to={`/conversations/${c.id}`} style={{ textDecoration: 'none' }}><h3>{c.title}</h3></Link></div>)

  return (
    <div className='conversations-container'>
      <br />
      <h2>Join A Conversation</h2>
      <div className='converations-list'>
        {all}
      </div>
    </div>
    
  )
}

export default connect( null, { getConversations })(Conversations)