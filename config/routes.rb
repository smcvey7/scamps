Rails.application.routes.draw do
  
  resources :messages, only: [:index, :create, :destroy, :update]
  resources :signups, only: [:create, :update]
  resources :activities, only: [:index]
  resources :campers, only: [:index, :show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/me', to: 'campers#show'
  post '/login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

end
