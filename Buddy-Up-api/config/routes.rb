Rails.application.routes.draw do
  resources :messages
  resources :conversations
  resources :users
  post '/login', to: "auth#login"
  get '/auto_login', to: 'auth#auto_login'
end
