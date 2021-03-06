class ConversationsController < ApplicationController
    # before_action :find_Conversations, only: [:delete]
    skip_before_action :require_login, only: [:index, :show]

    def index
        @conversations = Conversation.all
        render json: @conversations.to_json(
            :include => {:messages => {:include => :user}}
        )
    end
    
    def create
        conversation = Conversation.create(conversation_params)
        if conversation.save
            render json: conversation, status: :created
        else
            render json: {errors: conversation.errors.full_messages}, status: :not_acceptable
        end
    end

    def show
        conversation = Conversation.find(params[:id])
        ActionCable.server.broadcast 'conversation_channel', conversation
        render json: conversation.to_json(
            :include => {:messages => {:include => :user}}
        )
    end

    def delete
        conversation = Conversation.find(params[:id])
        byebug
        conversation.destroy
    end

    private 

    def conversation_params
        params.require(:conversation).permit!
    end
    
    def find_Conversations
        @conversation = Conversation.find(params[:id])
    end
end
