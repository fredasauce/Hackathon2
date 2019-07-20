class AddLikedToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :liked, :boolean
  end
end
