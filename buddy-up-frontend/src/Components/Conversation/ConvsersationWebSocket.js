import React, {useEffect, useState} from 'react'
import Message from '../Messages/Message'
import { saveMessage } from '../../redux/action'
import { connect, useSelector } from 'react-redux'


function ConvsersationWebSocket({ cableApp, convoId, currentUser, state, saveMessage }) {
    const conversations = useSelector(state => state.conversations)
    const conversation = conversations.find(c => c.id == convoId)

    useEffect(() => {

        // save(message)
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
                saveMessage(data.message)
                // setConversation (conversation => [...conversation, data])
            }
        })

        
        

        return function cleanup(){
            // cableApp.cable.subscriptions.disconnect()
            console.log("unsubbing from ", convoId)
            subscription.unsubscribe()
        }
        
    }, [convoId, cableApp])



    
    

    if(!conversations){
        return(
            <div>
                
                <h3>no messages yet</h3>
            </div>
        )
    } else{
        const renderMessages = conversation.messages.map(m => <Message id={m.id} username={m.user.username} text={m.text} currentUser={currentUser} />)
        return(
            <div>
                {/* <Message message={message}/> */}
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

export default connect( null, { saveMessage })(ConvsersationWebSocket)