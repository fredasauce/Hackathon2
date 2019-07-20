# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
<<<<<<< HEAD

  has_many :videos
  has_many :comments, through: :videos
=======
>>>>>>> 0b445d1a68338107e4c47ac3ca3098f3e6abd8d0
end
