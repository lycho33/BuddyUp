class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    # def new
    # end

    def create
        user = User.find_by(email: params[:session][:email].downcase)
        if user && user.authenticaste(params[:session][:password])
            log_in user
            redirect_back_or user
        else 
            flash.now[:danger] = 'Invalid email/password combination'
            render 'new'
        end
    end

    def destroy
        log_out
        redirect_to root_url
    end
end
