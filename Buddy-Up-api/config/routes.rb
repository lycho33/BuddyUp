Rails.application.routes.draw do
  resources :word_banks
  resources :messages
  resources :conversations
  resources :users
  post '/login', to: "auth#login"
  get '/auto_login', to: 'auth#auto_login'
  mount ActionCable.server => '/cable'
end
