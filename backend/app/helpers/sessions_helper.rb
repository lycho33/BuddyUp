module SessionsHelper
    #accepts user and creates a session for the user
    def log_in(user)
        session[:user_id] = user.id
    end
    #if there is a user logged in, the current user will be that user
    def current_user
        if session[:user_id]
            @current_user ||= User.find_by(id: session[:user_id])
        end
    end
    #returns T/F if there is a current_user or not
    def logged_in?
        !current_user.nil?
    end
    #logs out the user by deleting it's session and set the current_user to nil
    def log_out
        session.delete(:user_id)
        @current_user = nil
    end
    #accepts user and returns T if it's the same as current_user
    def current_user?(user)
        user == current_user
    end
    #redirect a non-user to first visited URL after logging in
    def redirect_back_or(default)
        redirect_to(session[:forwarding_url] || default)
        session.delete(:forwarding_url)
    end
    
    private
    #store location & redirect to login
    def logged_in_user
        unless logged_in?
            store_location
            flash[:danger] = "Please log in."
            redirect_to login_url
        end
    end
end
