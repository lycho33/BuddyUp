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
            ConversationChannel.broadcast_to(conversation, message)
        end
        render json: message
    end

    private

    def message_params
        params.require(:message).permit(:text, :user_id, :conversation_id)
    end
end
