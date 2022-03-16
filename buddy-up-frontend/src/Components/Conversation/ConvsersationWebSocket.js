import React, {useEffect} from 'react'
// import { connect } from 'react-redux'
// import { getConvoData } from '../../redux/action'

function ConvsersationWebSocket({ cableApp, updateApp, convoId, convoData}) {
  
    useEffect(() => {
        cableApp.room = cableApp.cable.subscriptions.create({
            channel: 'ConversationChannel',
            conversation: `${convoId}`
        },
        {
            received: (updatedConvo) => {
                updateApp(updatedConvo)
            }
        })
    }, [])

    return (
    <div>ConvsersationWebSocket</div>
  )
}

export default ConvsersationWebSocket