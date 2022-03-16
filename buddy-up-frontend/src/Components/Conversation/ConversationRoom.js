import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { getConvoData } from '../../redux/action'
import ConvsersationWebSocket from './ConvsersationWebSocket'

function ConversationRoom({ getConvoData, cableApp, updateApp, convoData, setConvoData }) {
  const params = useParams()

  useEffect(() => {
    getConvoData(params.id)
    updateCurrentConvoState()
  }, [])

  const convo = useSelector(state => state.conversations)
  const renderConvo = convo.map(c => <h3 key={c.id}>Title: {c.title}</h3>)

  const updateCurrentConvoState = () => {
    setConvoData({
      currentConvo: {
        convo: convo[0].title,
        users: convo[0].users,
        messages: convo[0].messages
      }
    })
  }

  return (
    <div>
      <br />
      ConversationRoom
      {renderConvo}
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