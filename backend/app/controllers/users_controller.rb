class UsersController < ApplicationController
    #user can't vist anything before logging in
    # before_action :logged_in_user, only: [:show]

    def show
        @user = User.find(params[:id])
      end
    
    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            #automatically logs in after signing up
            log_in @user
            flash[:success] = "Welcome to the app!"
            redirect_to @user
        else
            render 'new'
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
