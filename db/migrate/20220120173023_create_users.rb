class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
        t.string :name
        t.string :author
        t.string :rating
        t.text :description
      t.timestamps
    end
  end
end
