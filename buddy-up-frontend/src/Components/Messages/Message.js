import React from 'react'
import '../../css/ConversationRoom.css'
import { useSelector, connect } from 'react-redux'
import { createVocab } from '../../redux/action'

function Message({id, username, text, currentUser, createVocab}) {

  const user = useSelector(state => state.user)
  
  const clickWord = (e) => {
    let sentence = e.target.innerHTML
    let word = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g," ")
                   .split(' ')
                   .filter(letter => {
                     if(letter !== "nbsp" && letter !== " ") return letter
                    })
    let wordInfo = {
      word: word.toString(),
      user_id: user.id
    }
    createVocab(wordInfo.word, wordInfo.user_id)
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

export default connect(null, { createVocab })(Message)