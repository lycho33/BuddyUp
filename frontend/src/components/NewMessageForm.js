import React, { useState, useEffect } from "react"
import { API_ROOT } from '../constants';
import { useSelector } from 'react-redux'
import axios from 'axios'

function NewMessageForm({conversationId}) {

    const [text, setText] = useState('')
    // const [conversation_id, setConversation_id] = useState(conversationId)
    const user = useSelector(state => state.user)
    

    useEffect(() => {
        console.log("convo", conversationId, "user", user.id)
    }, [])

    const handleChange = e => {
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        let message = {
            text: text,
            conversation_id: conversationId,
            user_id: user.id
        }
        console.log(message)

        axios.post(`${API_ROOT}/messages`, {message})
            .then(res => {
                console.log("message form", res)
                setText('')
            })
    }

  return (
    <div className="newMessageForm" key={conversationId}>
        <form onSubmit={handleSubmit}>
            <label>New Message:</label>
            <br />
            <input 
                type="text" 
                value={text}
                onChange={handleChange}
            />
            <input type="submit" />
        </form>
    </div>
  )
}

export default NewMessageForm