import React, {useEffect} from 'react'
// import { connect } from 'react-redux'
// import { getConvoData } from '../../redux/action'
import { useSelector } from 'react-redux'

function ConvsersationWebSocket({ cableApp, updateApp, convoId, convoData}) {

    const conversation = useSelector(state => state.conversations[0])
  
    useEffect(() => {
        console.log(conversation)
        const paramsToSend = {
            channel: 'ConversationChannel',
            conversation: `${convoId}`
        }
        const handlers = {
            received(conversation){
                updateApp(conversation)
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