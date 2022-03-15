import React, { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { getConversations } from '../../redux/action'

const Conversations = ({ getConversations }) => {

  useEffect(() => {
    getConversations()
  }, [])

  const convos = useSelector(state => state.conversations)
  const all = convos.map(c => <h1>{c.title}</h1>)

  return (
    <div>
      Conversations
      {all}
    </div>
    
  )
}

export default connect( null, { getConversations })(Conversations)