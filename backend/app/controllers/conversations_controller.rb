class ConversationsController < ApplicationController

    #used for frontend's initial fetch request to receive current conversations/messages
    def index
        conversations = Conversation.all
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
end
