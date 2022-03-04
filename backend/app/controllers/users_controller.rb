class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    @users = User.all
    render json: @users
  end

  def create
    user = User.create!(user_params)
    # session[:user_id] = user.id
    log_in user
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
