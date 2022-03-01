import React from 'react';
import NewMessageForm from './NewMessageForm';
import { useSelector } from 'react-redux'

const MessagesArea = ({conversation: { id, title, messages },}) => {

  const user = useSelector(state => state.user)

  //--------------Helper Method--------------------------------
  const orderedMessages = messages => {
    const sortedMessages = messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
    return sortedMessages.map(message => {
      return <li key={message.id}>({user.username}):   {message.text}</li>;
    });
  };

  return (
    <div className="messagesArea">
      <h2>{title}</h2>
      <ul>{orderedMessages(messages)}</ul>
      <NewMessageForm conversationId={id} />
    </div>
  );
};

export default MessagesArea;

// helpers

