import React, { useState, useEffect } from "react";
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import NewConversationForm from "./NewConversationForm";
import MessagesArea from './MessagesArea';
import Cable from '../Cable';
import axios from 'axios'

function ConversationList() {

    const [state, setState] = useState({
        conversations: [],
    })
    const [activeConversation, setActiveConversation] = useState(null)

    //---------------------FETCH Conversations-------------------------------
    useEffect(() => {
        axios.get(`${API_ROOT}/conversations`)
        .then(res => {
            console.log(res)
            handleState(res.data)
        })
        .catch(error => console.log('conversationsApi errors:', error))
    }, [])

    const handleState = (data) => {
        setState({
            conversations: data
        })
    }
    
    //-----------------CHANNEL---------------------------------------------------------
    const handleReceivedConversation = res => {
        const { conversation } = res;
        setState({
            conversations: [...state.conversations, conversation]
        })
    }

    //------------Renders Conversations & when clicked.... opens to the chatroom------------
    const handleClick = id => {
        // debugger
        // setState({ activeConversation: id })
        setActiveConversation(id)
    }

    const mapConversations = (conversations, handleClick) => {
        return state.conversations.map(conversation => {
            return (
            <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
                {conversation.title}
            </li>
            );
        });
    };
    //-----------------CABLE------------------------------------------------
    const handleReceivedMessage = res => {
        const { message } = res;
        const conversations = [...state.conversations];
        const conversation = conversations.find(
            conversation => conversation.id === message.conversation_id
        );
        conversation.messages = [...conversation.messages, message]
        setState({ conversations: conversations })
    }

    //HELPER METHODS for Messages--------------------------------------------
    const findActiveConversation = (conversations, activeConversation) => {
        const clickedConversation = conversations.find(
          conversation => conversation.id === activeConversation
        );
        return clickedConversation
    };
      

    
  return (
    <div className="conversationsList">
        <ActionCable
            channel={{ channel: 'ConversationsChannel' }}
            onReceived={handleReceivedConversation}
        >
            {state.conversations.length ? ( 
                <Cable 
                    conversations={state.conversations}
                    handleReceivedMessage={handleReceivedMessage}
                />) : null}

            <h2>Conversations</h2>

            <ul>{mapConversations(state.conversations, handleClick)}</ul>
            <NewConversationForm />

            {activeConversation ? (
                <MessagesArea
                    conversation={findActiveConversation(state.conversations, activeConversation)}
                />) : null}
                
        </ActionCable>

    </div>
  )
}

export default ConversationList