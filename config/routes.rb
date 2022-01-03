Rails.application.routes.draw do
  resources :books
  get "/hello", to: "application#hello_world"
end
