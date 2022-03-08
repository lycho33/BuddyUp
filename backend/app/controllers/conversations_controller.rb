class ConversationsController < ApplicationController
  # skip_before_action :authorize, only: [:index]

    #used for frontend's initial fetch request to receive current conversations/messages
    def index
        # byebug
      # @current_user = User.find_by(id: session[:user_id])
        conversations = @current_user.created_conversations
        render json: conversations
        # byebug
    end

    #used to save received data & broadcast the data to the appropriate channels 
    def create
      conversation = @current_user.conversations.create(conversation_params)
        if conversation.save
          serialized_data = ActiveModelSerializers::Adapter::Json.new(
            ConversationSerializer.new(conversation)
          ).serializable_hash
          ActionCable.server.broadcast 'conversations_channel', serialized_data
          head :ok
        end
    end

    private
  
    def conversation_params
        params.require(:conversation).permit(:title, :user_id)
    end
end
