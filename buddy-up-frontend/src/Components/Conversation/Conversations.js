import React, { useState} from "react"


function Conversations() {
    const [state, setState] = useState({title: ''})

    const handleChange = e => {
        setState({
            title: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

  return (
    <div>
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

export default Conversations