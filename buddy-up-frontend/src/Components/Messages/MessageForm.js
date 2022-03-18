import React, { useState} from "react"
import { connect, useSelector } from 'react-redux'
import { createMessage } from '../../redux/action'

function MessageForm({ createMessage, conversation_id }) {
  const currentUser = useSelector(state => state.user)
  const messages = useSelector(state => state.conversations[0].messages)
  const [state, setState] = useState({text: ''})

  const handleChange = e => {
    setState({
        text: e.target.value 
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = {
      ...state,
      conversation_id: conversation_id,
      user_id: currentUser.id
    }
    createMessage(message)
  }

  const renderMessages = messages.map(m => <h3>{m.text}</h3>)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Message</label>
        <input type="text" placeholder='your message' value={state.text} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>

      {/* {renderMessages} */}
      
    </div>
  )
}

export default connect(null, { createMessage })(MessageForm)