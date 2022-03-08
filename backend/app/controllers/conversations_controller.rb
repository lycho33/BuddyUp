class ConversationsController < ApplicationController
  # before_action :set_Conversations, only: [:index, :create]
  # skip_before_action :authorize

    #used for frontend's initial fetch request to receive current conversations/messages
    def index
        conversations = @current_users.created_conversations
        render json: conversations
    end

    #used to save received data & broadcast the data to the appropriate channels 
    def create
      conversation = conversations.create(conversation_params)
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

    def set_Conversations
      @conversation = Conversation.find(params[:id])
    end
end
