import React, { useState, useEffect } from "react"
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import NewConversationForm from "../NewConversationForm";
import MessagesArea from '../MessagesArea';
import Cable from '../Cable';
import axios from 'axios'

function ConversationList() {

    const [state, setState] = useState({
        conversations: [],
        activeConversation: null
    })

    useEffect(() => {
        axios.get(`${API_ROOT}/conversations`)
            .then(res => {
                console.log(res)
                //fix this
                setState(res)
            })
    }, [])

    const handleClick = id => {
        setState({ activeConversation: id })
    }
    
    const handleReceivedConversation = res => {
        const { conversation } = res;
        setState({
            conversations: [...state.conversations, conversation]
        })
    }

    const handleReceivedMessage = res => {
        const { message } = res;
        const conversations = [...state.conversations];
        const conversation = conversations.find(
            conversation => conversation.id === message.conversation_id
        );
        conversation.messages = [...conversation.messages, message]
        setState({ conversations })
    }

    //HELPER METHODS----------------------------------------------------------
    const findActiveConversation = (conversations, activeConversation) => {
        return conversations.find(
          conversation => conversation.id === activeConversation
        );
      };
      
    const mapConversations = (conversations, handleClick) => {
    return state.conversations.map(conversation => {
        return (
        <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
            {conversation.title}
        </li>
        );
    });
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
            {state.activeConversation ? (
                <MessagesArea
                    conversation={findActiveConversation(state.conversations, state.activeConversation)}
                />) : null}
        </ActionCable>

    </div>
  )
}

export default ConversationList

