import React, { useState, useEffect } from "react"
import { API_ROOT, HEADERS } from './constants';
import axios from 'axios'

function NewMessageForm({conversationId}) {

    const [state, setState] = useState({
        text: '',
        conversation_id: conversationId
    })

    const [text, setText] = useState('')
    const [conversation_id, setConversation_id] = useState(conversationId)

    useEffect(() => {

    }, [])

    const handleChange = e => {
        // setState({
        //     text: e.target.value
        // })
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        let message = {
            text: text,
            conversation_id: conversation_id
        }

        axios.post(`${API_ROOT}/messages`, {message})
            .then(res => {
                console.log("message form", res)
                setText('')
            })

        // fetch(`${API_ROOT}/messages`, {
        //     method: 'POST',
        //     headers: HEADERS,
        //     body: JSON.stringify(state)
        //   });
        //   setState({ text: '' });
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