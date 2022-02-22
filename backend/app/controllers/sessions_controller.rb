class SessionsController < ApplicationController
    
    def create
        @user = User.find_by(username: session_params[:username])
      
        if @user && @user.authenticate(session_params[:password])
          login!
          render json: {
            logged_in: true,
            user: @user
          }
        else
          render json: { 
            status: 401,
            errors: ['no such user', 'verify credentials and try again or signup']
          }
        end
    end

    def is_logged_in?
      @current_user = User.find(session[:user_id]) if session[:user_id]
      if @current_user
        render json: {
          logged_in: true,
          user: UserSerializer.new(@current_user)
        }
      else
        render json: {
          logged_in: false
        }
      end
    end

    def destroy
        logout!
        render json: {
          status: 200,
          logged_out: true
        }
    end

    private

    def session_params
        params.require(:user).permit(:username, :email, :password)
    end
end
