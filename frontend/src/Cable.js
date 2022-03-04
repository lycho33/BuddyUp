// import ActionCable from 'actioncable';
// const cable = ActionCable.createConsumer('ws://test.example.com/cable');

import React, { Fragment, useState } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

function Cable({ conversations, handleReceivedMessage, user }) {
  const [message, setMessage] = useState('')

  return (
    <div>
        {/* returns a group of children without adding extra nodes to the DOM */}
        <Fragment>
            {conversations.map(conversation => {
                return (
                <ActionCableConsumer
                    key={conversation.id}  
                    channel={{ channel: 'MessagesChannel', conversation: conversation.id, user: user.id }}
                    onReceived={handleReceivedMessage}
                ></ActionCableConsumer>
                );
            })}
        </Fragment>
    </div>
  )
}

export default Cable