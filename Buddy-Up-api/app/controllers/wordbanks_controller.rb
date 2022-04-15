class WordbanksController < ApplicationController
    skip_before_action :require_login, only: [:index]
    
    def index
        wordbank = Wordbank.all
        render json: wordbank
    end
end
