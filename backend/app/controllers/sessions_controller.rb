class SessionsController < ApplicationController 
  skip_before_action :authorize, only: :create

  def create
    user = User.find_by(username: params[:user][:username])
    if user && user.authenticate(params[:user][:password])
      log_in user
      current_user?
      params[:session][:remember_me] == '1' ? remember(user) : forget(user)
      render json: user
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    # log_out if logged_in?
    log_out
    head :no_content
  end
end
