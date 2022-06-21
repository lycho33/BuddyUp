import React, { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { getConversations } from '../../redux/action'
import { Link } from 'react-router-dom'
import '../../css/Conversations.css'
import { RiChatSmile2Fill } from 'react-icons/ri';
import ConvoForm from './ConvoForm'

const Conversations = ({ getConversations }) => {

  useEffect(() => {
    getConversations()
  })

  const handleClick = (e) => {
      debugger
  }

  const convos = useSelector(state => state.conversations)
  const all = convos.map(c => 
    <div className='conversation'>
      <RiChatSmile2Fill  size={50} className='conversation-list-icon'/>
      <Link to={`/conversations/${c.id}`} style={{ textDecoration: 'none' }}>
        <h3>{c.title}</h3>
      </Link>
      <button onClick={handleClick}>X</button>
    </div>
    )

  

  return (
    <div>
      <div className='conversations-container'>
        <h2>Join A Conversation</h2>
        <div className='converations-list'>
          {all}
        </div>
      </div>
      <div>
          <ConvoForm />
      </div>
    </div>
  
    
  )
}

export default connect( null, { getConversations })(Conversations)