class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :age
      t.string :gender
      t.string :title
      t.string :role
      t.string :email
      t.string :descriptions
      t.integer :score

      t.timestamps
    end
  end
end
