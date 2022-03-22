import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { getConvoData } from '../../redux/action'
import ConvsersationWebSocket from './ConvsersationWebSocket'
import MessageForm from '../Messages/MessageForm'
import '../../css/ConversationRoom.css'

function ConversationRoom({ getConvoData, cableApp }) {
  const params = useParams()
  const [state, setState] = useState([])

  useEffect(() => {
    getConvoData(params.id)
  })

  const convo = useSelector(state => state.conversations[0])
  const currentUser = useSelector(state => state.user.username)

  return (
    <div className='conversation-container'>
      <h1>Conversation's Title: <span style={{color: '#DA7B93'}}>{convo.title}</span></h1>
      <div className='messages-box'>
        <ConvsersationWebSocket 
          cableApp={cableApp} 
          convoId={params.id} 
          currentUser={currentUser} 
          state={state}
          setState={setState}
        />
      </div>
      <div className='message-form-container'>
        <MessageForm conversation_id={params.id} /><br />
      </div>
    </div>
  )
}

export default connect(null, { getConvoData })(ConversationRoom)