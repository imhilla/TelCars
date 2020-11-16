class AddObjectivesToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :objectives, :string
  end
end
