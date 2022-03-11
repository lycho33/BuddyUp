class ConversationsController < ApplicationController
    before_action :find_Conversations, only: [:delete]

    def index
        @conversations = Conversation.all
        render json: @conversations
    end
    
    def create
        conversation = current_user.create(conversation_params)
        if conversation.valid?
            render json: conversation status: :created
        else
            render json: status: :not_acceptable
        end
    end

    def delete
        @conversation.destroy
    end

    private 

    def conversation_params
        params.require(:conversation).permit(:title, :joins_request, :user_id)
    end
    
    def find_Conversations
        @conversation = Conversation.find(params[:id])
    end
end
