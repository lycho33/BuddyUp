import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { getConvoData } from '../../redux/action'
import ConvsersationWebSocket from './ConvsersationWebSocket'
import MessageForm from '../Messages/MessageForm'

function ConversationRoom({ getConvoData, cableApp }) {
  const params = useParams()

  useEffect(() => {
    getConvoData(params.id)
  }, [])

  const convo = useSelector(state => state.conversations[0])
  const currentUser = useSelector(state => state.user.username)
  const renderMessages = convo.messages.map(m => <h3 key={m.id}>{m.user.username}: {m.text}</h3>)

  return (
    <div>
      <br />
      ConversationRoom
      <h1>Title:{convo.title}</h1>
      {renderMessages}
      <ConvsersationWebSocket cableApp={cableApp} convoId={params.id} />
      <MessageForm conversation_id={params.id} /><br />
    </div>
  )
}

export default connect(null, { getConvoData })(ConversationRoom)