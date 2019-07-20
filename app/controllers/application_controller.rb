class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  # devise_parameter_sanitizer.permit(:sign_up, keys:[:name, :nickname, :image, :email, :password])
end
