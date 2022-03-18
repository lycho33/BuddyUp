class ConversationChannel < ApplicationCable::Channel
  def subscribed
    @conversation = Conversation.find_by(id: params[:conversation])
    stream_from @conversation
    ActionCable.server.broadcast(@conversation, { messages: @conversation.messages})
  end

  # Called when there's incoming data on the websocket for this channel
  def received(data)
    byebug
    ActionCable.server.broadcast('conversation', 'ActionCable is connected')
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
