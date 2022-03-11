class CreateConversations < ActiveRecord::Migration[6.1]
  def change
    create_table :conversations do |t|
      t.string :title
      t.boolean :joins_request
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
