import React from 'react'
import '../../css/ConversationRoom.css'

function Message({id, username, text, currentUser}) {
    
  return (
    <div className={currentUser === username ? 'currentUser-message' : 'buddys-message'}>
        <h3 key={id}>{username}: {text}</h3>
    </div>
  )
}

export default Message