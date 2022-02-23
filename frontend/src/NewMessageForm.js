import React, { useState, useEffect } from "react"
import { API_ROOT, HEADERS } from './constants';
import axios from 'axios'

function NewMessageForm({conversation_id}) {

    const [state, setState] = useState({
        text: '',
        conversation_id: conversation_id
    })

    useEffect(() => {

    }, [])

    const handleChange = e => {
        setState({
            text: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        let message = {
            text: state.text,
            conversation_id: state.conversation_id
        }

        // axios.post(`${API_ROOT}/messages`, {message})
        //     .then(res => {
        //         debugger
        //         console.log("message form", res)
        //         setState({ text: ''})
        //     })

        fetch(`${API_ROOT}/messages`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(state)
          });
          setState({ text: '' });
    }

  return (
    <div className="newMessageForm" key={conversation_id}>
        <form onSubmit={handleSubmit}>
            <label>New Message:</label>
            <br />
            <input 
                type="text" 
                value={state.text}
                onChange={handleChange}
            />
            <input type="submit" />
        </form>
    </div>
  )
}

export default NewMessageForm