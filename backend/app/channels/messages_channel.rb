class MessagesChannel < ApplicationCable::Channel
  # This channel braodcasts any new messages that are added to a specific conversation

  def subscribed
    user = User.find(param[:user])
    conversation = Conversation.find(params[:conversation])
    # expects an object from the model
    stream_for conversation
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
