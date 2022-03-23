import React from 'react'
import '../../css/ConversationRoom.css'

function Message({id, username, text, currentUser}) {
    
  return (
    <div className={currentUser === username ? 'currentUser-message' : 'buddys-message'}>
        <h3 key={id}>
          <span id='username'>
            {username.charAt(0).toUpperCase() + username.slice(1)}
          </span> 
          <span id='text'>{text}</span>
        </h3>
    </div>
  )
}

export default Message