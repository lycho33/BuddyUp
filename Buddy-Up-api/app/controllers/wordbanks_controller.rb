class WordbanksController < ApplicationController
    skip_before_action :require_login, only: [:index, :show]
    
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

    def show
        @wordbank = Wordbank.find(params[:id])
        render json: @wordbank
    end

    def update
        wordbank = current_user.wordbank.find(params[:id])
        wordbank.update!(wordbank_params)
    end

    private

    def wordbank_params
        params.require(:wordbank).permit(:id, :word, :definition, :synonyms, :image_url, :sentence, :user_id)
    end
end
