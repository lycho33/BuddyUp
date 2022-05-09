import React from 'react'

function GreetBeforeDef({word, display}) {
  return (
    <div style={{display: `${display}`}}>
        <h3>Can you guess the definition?</h3>
    </div>
  )
}

export default GreetBeforeDef