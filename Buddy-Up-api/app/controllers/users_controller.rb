class UsersController < ApplicationController
    skip_before_action :require_login, only: [:create, :index, :show]
	
    def index
        @users = User.all
        render json: @users
    end

    def create
        user = User.create(user_params)
        if user.valid?
            payload = {user_id: user.id}
            token = encode_token(payload)
            render json: {user: UserSerializer.new(user), jwt: token}, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :not_acceptable
        end
    end

    def show
        user = User.find(params[:id])
        render json: user.wordbank
    end

    # def show
    #     conversation = Conversation.find(params[:id])
    #     ActionCable.server.broadcast 'conversation_channel', conversation
    #     render json: conversation.to_json(
    #         :include => {:messages => {:include => :user}}
    #     )
    # end

    private

    def user_params
        params.require(:user).permit!
    end
end
