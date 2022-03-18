class ConversationChannel < ApplicationCable::Channel
  def subscribed
    @conversation = Conversation.find_by(id: params[:conversation])
    # @conversation = Conversation.find(params[:conversation])
    stream_from @conversation
  end

  # Called when there's incoming data on the websocket for this channel
  # def received(conversation)
  #   ConversationChannel.broadcast_to(@conversation, {conversation: @conversation, users: @conversation.users, messages: @conversation.messages})
  # end
  def received(data)
    byebug
    ActionCable.server.broadcast('conversation', 'ActionCable is connected')
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
