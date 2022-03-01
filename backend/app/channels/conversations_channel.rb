class ConversationsChannel < ApplicationCable::Channel
  # This channel broadcasts newly created conversations

  def subscribed
    user = params['username']
    # expects to receive a string as an argument
    stream_from "conversations_channel"
    ActionCable.server.broadcast 'public_chat', "#{user} joined!"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
