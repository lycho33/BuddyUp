class ConversationsChannel < ApplicationCable::Channel
  # This channel broadcasts newly created conversations

  def subscribed
    # expects to receive a string as an argument
    stream_from "conversations_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
