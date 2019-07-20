Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :videos do
      resources :comments
    end
    get 'my_friends', to: 'profiles#my_friends'
  end
end
