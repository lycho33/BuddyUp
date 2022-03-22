import React, {useEffect, useState} from 'react'
import Message from '../Messages/Message'


function ConvsersationWebSocket({ cableApp, convoId, currentUser, state }) {
    const [conversation, setConversation] = useState([])

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
                setConversation (conversation => [...conversation, data])
            }
        })
        

        return function cleanup(){
            cableApp.cable.subscriptions.disconnect()
            console.log("unsubbing from ", convoId)
            subscription.unsubscribe()
        }
        
    }, [convoId, cableApp])

    
    

    if(conversation.length === 0){
        return(
            <div>
                <h3>no messages yet</h3>
            </div>
        )
    } else{
        const renderMessages = conversation.map(m => <Message id={m.id} username={m.message.user.username} text={m.message.text} currentUser={currentUser} />)
        // const renderMessages = conversation.map(m => <h3>{m.message.user.username}: {m.message.text}</h3>)
        return(
            <div>
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