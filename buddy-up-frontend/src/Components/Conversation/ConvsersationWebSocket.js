import React, {useEffect} from 'react'
// import { connect } from 'react-redux'
// import { getConvoData } from '../../redux/action'
import { useSelector } from 'react-redux'

function ConvsersationWebSocket({ cableApp, convoId}) {

    const conversation = useSelector(state => state.conversations[0])
    const message = conversation.messages[1]
  
    useEffect(() => {
        const paramsToSend = {
            channel: 'ConversationChannel',
            conversation: `${convoId}`
        }
        // const subscription = cableApp.room = cableApp.cable.subscriptions.create(paramsToSend, handlers)
        
        const subscription = cableApp.cable.subscriptions.create(paramsToSend, {
            connected(){
                console.log("connected to the conversation!")
            },
            disconnected(){
                console.log("disconnected from the conversation!")
            }, 
            received: (data) => {
                console.log("received", data)
            }
        })

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