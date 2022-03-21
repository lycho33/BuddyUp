import React, {useEffect, useState} from 'react'
// import { connect } from 'react-redux'
import { getConvoData } from '../../redux/action'
import { useSelector } from 'react-redux'

function ConvsersationWebSocket({ cableApp, convoId}) {

    const conversation = useSelector(state => state.conversations[0])
    const [message, setMessage] = useState('')
    const [user, setUser] = useState('')
    const [users, setUsers] = useState([user])
    const [state ,setState] = useState({
        user: '',
        
    })

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
                getConvoData(convoId)
                setMessage(data.message.text)
                setUser(data.message.user.username)
            }
        })

        return function cleanup(){
            console.log("unsubbing from ", convoId)
            subscription.unsubscribe()
        }
    }, [])

    return (
        <div>
            <h3>-----------------------------</h3>
            <h3>{user}: {message}</h3>
        </div>
    )
}

export default ConvsersationWebSocket