class MessagesController < ApplicationController
  before_action :find_user

    def index
      messages = @current_user.messages.all
      render json: messages
    end

    def create
      message = @current_user.messages.create(message_params)
      conversation = Conversation.find(message_params[:conversation_id])
        if message.save
          serialized_data = ActiveModelSerializers::Adapter::Json.new(
            MessageSerializer.new(message)
          ).serializable_hash
          MessagesChannel.broadcast_to conversation, serialized_data
          head :ok
        end
    end

    private
  
    def message_params
      params.require(:message).permit(:text, :conversation_id, :user_id)
    end

    def find_user
      user = User.find_by_id(params[:user_id])
    end
end
