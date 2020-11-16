class RemoveUserFromItems < ActiveRecord::Migration[5.2]
  def change
    remove_reference :items, :user, foreign_key: true
  end
end
