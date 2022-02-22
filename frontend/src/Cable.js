import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

function Cable({ conversations, handleReceivedMessage }) {
  return (
    <div>
        <Fragment>
            {conversations.map(conversation => {
                return (
                <ActionCable
                    key={conversation.id}  
                    channel={{ channel: 'MessagesChannel', conversation: conversation.id }}
                    onReceived={handleReceivedMessage}
                />
                );
            })}
        </Fragment>
    </div>
  )
}

export default Cable