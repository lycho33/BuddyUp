import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Message from '../Messages/Message'


function ConvsersationWebSocket({ cableApp, convoId, currentUser, state }) {


    useEffect(() => {
        const paramsToSend = {
            channel: 'ConversationChannel',
            conversation: `${convoId}`
        }

        const subscription = cableApp.cable.subscriptions.create(paramsToSend, {
            connected(){
                console.log("connected to the conversation!")
            },
            disconnected(){
                console.log("disconnected from the conversation!")
            }, 
            received(data) {
                console.log("received websocket data", data)
            }
        })

        // renderMessages()

        return function cleanup(){
            cableApp.cable.subscriptions.disconnect()
            console.log("unsubbing from ", convoId)
            subscription.unsubscribe()
        }
    }, [])

    
    // const renderMessages = conversation.messages.map(m => 
    //     setState({
    //         id: m.id,
    //         messages: m.text,
    //         username: m.user.username
    //     })

    // )

    return (
        <div>
            {/* <Message id={id} text={messages} username={username} currentUser={currentUser}/> */}
            {/* <h3>-----------------------------</h3> */}
            {/* <h3>{user}: {message}</h3> */}
        </div>
    )
}

export default ConvsersationWebSocket