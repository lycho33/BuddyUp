class ConversationsController < ApplicationController
    before_action :find_Conversations, only: [:delete]
    skip_before_action :require_login, only: [:index, :show]

    def index
        @conversations = Conversation.all
        render json: @conversations
    end
    
    def create
        conversation = current_user.conversations.create(conversation_params)
        if conversation.save
            render json: conversation, status: :created
        else
            render json: {errors: conversation.errors.full_messages}, status: :not_acceptable
        end
    end

    def show
        conversation = Conversation.find(params[:id])
        render json: conversation
    end

    def delete
        @conversation.destroy
    end

    private 

    def conversation_params
        params.require(:conversation).permit!
    end
    
    def find_Conversations
        @conversation = Conversation.find(params[:id])
    end
end
