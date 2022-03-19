class MessagesController < ApplicationController
    skip_before_action :require_login, only: [:index]

    def index
        messages = Message.all
        render json: messages
    end

    def create
        message = current_user.messages.new(message_params)
        conversation = Conversation.find(message_params["conversation_id"])
        if message.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(
                MessageSerializer.new(message)
            ).serializable_hash
            ConversationChannel.broadcast_to(conversation, serialized_data)
            ActionCable.server.broadcast(conversation, { messages: conversation.messages })
        end
        render json: message
    end

    private

    def message_params
        params.require(:message).permit(:text, :user_id, :conversation_id)
    end
end
