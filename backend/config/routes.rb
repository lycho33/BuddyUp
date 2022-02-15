Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:create]
  # get 'sign_up', to: 'users#new'
  post 'sign_up', to: 'users#create'
  get 'logged_in', to: 'users#show'

  # get 'sign_in', to: 'sessions#new'
  # post 'sign_in', to: 'sessions#create', as: 'log_in'

  # get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # get 'password', to: 'passwords#edit', as: 'edit_password'
  # patch 'password', to: 'passwords#update'
  # get 'password/reset', to: 'password_resets#new'
  # post 'password/reset', to: 'password_resets#create'
  # get 'password/reset/edit', to: 'password_resets#edit'
  # patch 'password/reset/edit', to: 'password_resets#update'
end
