class WordbanksController < ApplicationController
    skip_before_action :require_login, only: [:index]
    
    def index
        user = User.find(params[:user_id])
        wordbank = user.wordbank
        render json: wordbank
    end

    def create
        wordbank = current_user.wordbank.new(wordbank_params)
        if wordbank.save
            render json: wordbank, status: :created
        else
            render json: {errors: wordbank.errors.full_messages}, status: :not_acceptable
        end
    end

    private

    def wordbank_params
        params.require(:wordbank).permit!
    end
end
