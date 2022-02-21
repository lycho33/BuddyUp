Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  
  resources :users, only: [:create, :show, :index]
  resources :conversations, only: [:index, :create]
  resources :messages, only: [:create]

  # the client will be using /cable endpoint to instantiate the WebSockets connection with our server.
  mount ActionCable.server => '/cable'
end
