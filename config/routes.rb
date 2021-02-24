Rails.application.routes.draw do
  resources :favorites
  resources :carts
  resources :products
  resources :users
  post "/login", to: "auth#create"
  get "/profile", to: "users#profile"
  get "/users/:id/carts/:id", to: "carts#show"
  post "/users/:id/carts", to: "carts#create"
  delete "/users/:id/carts/:id", to: "carts#destroy"
  get "/users/:id/favorites/:id", to: "favorites#show"
  post "/users/:id/favorites", to: "favorites#create"
  delete "/users/:id/favorites/:id", to: "favorites#destroy"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end