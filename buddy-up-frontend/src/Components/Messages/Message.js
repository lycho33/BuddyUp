import React from 'react'
import '../../css/ConversationRoom.css'

function Message({id, username, text, currentUser}) {
  
  const clickWord = (e) => {
    let hello = e.target.innerHTML
    let arr = hello.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g," ")
                   .split(' ')
                   .filter(letter => {
                     if(letter !== "nbsp" && letter !== " ") return letter
                    })
    console.log(arr)
  }

  const renderText = (text) => {
    return text.split(' ').map(t => <span onClick={clickWord}>{t}&nbsp;</span>)
  }

  return (
    <div className={currentUser === username ? 'currentUser-message' : 'buddys-message'}>
        <h3 key={id}>
          <span id='username'>
            {username.charAt(0).toUpperCase() + username.slice(1)}
          </span> 
          {renderText(text)}
        </h3>
    </div>
  )
}

export default Message