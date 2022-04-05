Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :sellers
    resources :products
    # get '/products', to: 'products#index'
    resources :buyers

    get '/sellers/:id', to:'sellers#show'

    get '/buyers/:id', to:'buyers#show'

    get 'category_cost', to:'products#category_cost'
  end

end
