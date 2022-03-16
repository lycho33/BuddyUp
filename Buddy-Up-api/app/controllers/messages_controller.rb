class MessagesController < ApplicationController
    skip_before_action :require_login, only: [:index]

    def index
        messages = Message.all
        render json: messages
    end
end
