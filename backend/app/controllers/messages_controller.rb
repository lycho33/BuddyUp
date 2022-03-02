class MessagesController < ApplicationController
    def index
      message = Message.all
      render json: message
    end

    def create
        message = current_user.messages.create(message_params)
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
      params.require(:message).permit(:text, :conversation_id)
    end
end
