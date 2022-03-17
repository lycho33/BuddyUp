import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { getConvoData } from '../../redux/action'
import ConvsersationWebSocket from './ConvsersationWebSocket'
import MessageForm from '../Messages/MessageForm'

function ConversationRoom({ getConvoData, cableApp, updateApp, convoData, setConvoData }) {
  const params = useParams()

  useEffect(() => {
    getConvoData(params.id)
    //when refreshing page, it can't recognize info on update function
    updateCurrentConvoState()
  }, [])

  const convo = useSelector(state => state.conversations[0])
  // const renderMessages = convo.messages.map(c => <h3 key={c.id}>{c.text}</h3>)

  const updateCurrentConvoState = () => {
    setConvoData({
      currentConvo: {
        convo: convo[0],
        users: convo[0],
        messages: convo[0]
      }
    })
  }

  return (
    <div>
      <br />
      ConversationRoom<br />
      <h1>Title:{convo.title}</h1>
      {/* {renderMessages} */}
      <MessageForm conversation_id={params.id} /><br />
      <ConvsersationWebSocket 
        cableApp={cableApp}
        updateApp={updateApp}
        convoId={params.id}
        convoData={convoData}
      />
    </div>
  )
}

export default connect(null, { getConvoData })(ConversationRoom)