class CreateWordbanks < ActiveRecord::Migration[6.1]
  def change
    create_table :wordbanks do |t|
      t.string :word
      t.string :definition
      t.string :synonyms
      t.string :image_url
      t.string :sentence
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
