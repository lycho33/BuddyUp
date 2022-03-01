import React, { useState} from "react"
import axios from 'axios'
import { API_ROOT } from '../constants'

function NewConversationForm() {
    const [state, setState] = useState({
        title: ''
    })

    const handleChange = e => {
        setState({
            title: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        let conversation = {
            title: state.title
        }

        axios.post(`${API_ROOT}/conversations`, {conversation})
            .then(res => {
                console.log("conversation form", res)
                setState({ title: '' })
            })
    }

  return (
    <div className='newConversationForm'>
        <form onSubmit={handleSubmit}>
            <label>New Conversation:</label><br />
            <input 
                type="text"
                value={state.title}
                onChange={handleChange} 
            />
            <input type="submit" />
        </form>
    </div>
  )
}

export default NewConversationForm