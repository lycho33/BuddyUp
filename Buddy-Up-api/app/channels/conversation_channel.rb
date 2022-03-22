class ConversationChannel < ApplicationCable::Channel
  def subscribed
    @conversation = Conversation.find_by(id: params[:conversation])
    stream_for @conversation    
    ActionCable.server.broadcast(@conversation, { messages: @conversation.messages.all})
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
