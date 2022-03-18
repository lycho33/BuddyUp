import React, {useEffect} from 'react'
// import { connect } from 'react-redux'
// import { getConvoData } from '../../redux/action'

function ConvsersationWebSocket({ cableApp, updateApp, convoId, convoData}) {
  
    useEffect(() => {
        const paramsToSend = {
            channel: 'ConversationChannel',
            conversation: `${convoId}`
        }
        const handlers = {
            received(){
                
            },
            connected(){
                console.log("connected to the conversation!")
            },
            disconnected(){
                console.log("disconnected to the conversation!")
            }
        }
        // const subscription = cableApp.room = cableApp.cable.subscriptions.create(paramsToSend, handlers)
        
        const subscription = cableApp.cable.subscriptions.create(paramsToSend, handlers)

        return function cleanup(){
            console.log("unsubbing from ", convoId)
            subscription.unsubscribe()
        }
    }, [])

    return (
    <div>ConvsersationWebSocket</div>
  )
}

export default ConvsersationWebSocket