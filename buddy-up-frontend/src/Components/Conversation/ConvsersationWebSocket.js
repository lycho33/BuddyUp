import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Message from '../Messages/Message'


function ConvsersationWebSocket({ cableApp, convoId, currentUser, state }) {
    const [conversation, setConversation] = useState([])
    const [user, setUser] = useState('')
    const [message, setMessage] = useState('')

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
                // setUser(data.message.user.username)
                // setMessage(data)
                setConversation (conversation => [...conversation, data])
            }
        })

        // renderMessages()
        

        return function cleanup(){
            cableApp.cable.subscriptions.disconnect()
            console.log("unsubbing from ", convoId)
            subscription.unsubscribe()
        }
        
    }, [])

    
    

    if(conversation.length === 0){
        return(
            <div>
                <h3>no messages yet</h3>
                
            </div>
        )
    } else{
        const renderMessages = conversation.map(m => <h3>{m.message.user.username}: {m.message.text}</h3>)
        return(
            <div>
                
                {console.log(conversation)}
                {renderMessages}
            </div>
        )
    }

//     return (
//         <div>
//             {/* <Message id={id} text={messages} username={username} currentUser={currentUser}/> */}
//             {/* <h3>-----------------------------</h3> */}
//             {/* <h3>{user}: {message}</h3> */}
//             {console.log(conversation)}
            
//         </div>
//     )
}

export default ConvsersationWebSocket