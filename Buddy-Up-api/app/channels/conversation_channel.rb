class ConversationChannel < ApplicationCable::Channel
  def subscribed
    @conversation = Conversation.find_by(id: params[:conversation])
    stream_from @conversation
  end

  # Called when there's incoming data on the websocket for this channel
  def received(data)
    byebug
    ConversationChannel.broadcast_to(@conversation, {conversation: @conversation, users: @conversation.users, messages: @conversation.messages})
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
