import React, { useState } from "react"
import Definition from "./Definition"

function GreetBeforeDef({word, display, setDisplay, closeModal}) {

    const [state, setState] = useState({definition: ''})
    const [displayDef, setDisplayDef] = useState('none')

    const handleChange = e => {
        setState({
            definition: e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setDisplayDef('block')
        setDisplay('none')
    }

  return (
    <>
        <div className="greet-container" style={{display: `${display}`}}>
            <h3>Can you guess the definition?</h3>
            <form className="def-form" onSubmit={handleSubmit}>
                <input 
                    type="definition" 
                    placeholder='your definition'
                    value={state.definition}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
        <Definition word={word} userDef={state.definition} display={displayDef} closeModal={closeModal}/>
    </>
  )
}

export default GreetBeforeDef