Rails.application.routes.draw do
  resources :invites
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resource :users, only: [:index, :create]

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/logged_in", to: 'sessions#is_logged_in?'

  resources :conversations, only: [:index, :create] 
  resources :messages, only: [:index, :create] 
  resources :invites


  # the client will be using /cable endpoint to instantiate the WebSockets connection with our server.
  mount ActionCable.server => '/cable'
end
