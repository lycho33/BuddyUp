import React, { useState} from "react"
import { createConvo } from '../../redux/action'
import { connect } from 'react-redux'
import '../../css/CreateConversation.css'

function Conversations({ createConvo }) {
    const [state, setState] = useState({title: ''})

    const handleChange = e => {
        setState({
            title: e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createConvo(state)
    }

  return (
    <div className="conversation-form-container">
        <form onSubmit={handleSubmit} className="conversation-form">
            <label>New Conversation:</label><br />
            <input 
                type="text"
                value={state.title}
                onChange={handleChange} 
            />
            <input type="submit" className="conv-submit" />
        </form>
    </div>
  )
}

export default connect( null, { createConvo })(Conversations)