import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { getConvoData } from '../../redux/action'
import ConvsersationWebSocket from './ConvsersationWebSocket'
import MessageForm from '../Messages/MessageForm'
import Message from '../Messages/Message'
import '../../css/ConversationRoom.css'

function ConversationRoom({ getConvoData, cableApp }) {
  const params = useParams()

  useEffect(() => {
    getConvoData(params.id)
  }, [])

  const convo = useSelector(state => state.conversations[0])
  const currentUser = useSelector(state => state.user.username)
  const renderMessages = convo.messages.map(m => 
    <Message id={m.id} username={m.user.username} text={m.text} currentUser={currentUser}
  />)

  return (
    <div className='conversation-container'>
      <br />
      ConversationRoom
      <h1>Title:{convo.title}</h1>
      <div className='messages-box'>
        {renderMessages}
      </div>
      <div className='message-form-container'>
        <ConvsersationWebSocket cableApp={cableApp} convoId={params.id} />
        <MessageForm conversation_id={params.id} /><br />
      </div>
    </div>
  )
}

export default connect(null, { getConvoData })(ConversationRoom)