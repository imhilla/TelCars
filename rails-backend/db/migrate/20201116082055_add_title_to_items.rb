class AddTitleToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :title, :string
  end
end
