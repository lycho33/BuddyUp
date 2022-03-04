class CreateInvites < ActiveRecord::Migration[6.1]
  def change
    create_table :invites do |t|
      t.references :recipient, null: false, foreign_key: true
      t.references :sender, null: false, foreign_key: true
      t.references :conversation, null: false, foreign_key: true
      t.boolean :join_request

      t.timestamps
    end
  end
end
