Rails.application.routes.draw do
  resources :wordbanks
  resources :conversations do
    resources :messages
  end
  resources :users do
    resources :word_banks
  end
  post '/login', to: "auth#login"
  get '/auto_login', to: 'auth#auto_login'
  mount ActionCable.server => '/cable'
end
