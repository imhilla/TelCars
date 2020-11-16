class AddServicesToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :services, :string
  end
end
