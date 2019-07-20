class Profile < ApplicationRecord
  belongs_to :user
  has_many :videos

  def self.videos(id)
    Video.where("user_id = ?",id)
  end
end
