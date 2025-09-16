class CreateMessages < ActiveRecord::Migration[8.0]
  def change
    create_table :messages do |t|
      t.text :text
      t.string :sender
      t.references :conversation, null: false, foreign_key: true

      t.timestamps
    end
  end
end
