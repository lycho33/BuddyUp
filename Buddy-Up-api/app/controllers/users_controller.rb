class UsersController < ApplicationController
    skip_before_action :require_login, only: [:create, :index]
		
    def create
        byebug
        user = User.create(params[:user])
        if user.valid?
            payload = {user_id: user.id}
            token = encode_token(payload)
            render json: {user: UserSerializer.new(user), jwt: token}, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :not_acceptable
        end
    end

    private

    def user_params
        params.require(:user).permit!
    end
end
