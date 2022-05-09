import React, { useState } from "react"

function GreetBeforeDef({word, display}) {
  return (
    <div style={{display: `${display}`}}>
        <h3>Can you guess the definition?</h3>
        <form>
            <input type="text" placeholder='your definition'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default GreetBeforeDef