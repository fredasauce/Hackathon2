class AddLikedToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :liked, :boolean
  end
end
