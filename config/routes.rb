Rails.application.routes.draw do
  resources :sessions
  resources :users
  resources :books
  get "/hello", to: "application#hello_world"
end
