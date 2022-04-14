class CreateWordBanks < ActiveRecord::Migration[6.1]
  def change
    create_table :word_banks do |t|
      t.string :word
      t.string :definition
      t.string :synonyms
      t.string :image
      t.string :sampleSentence

      t.timestamps
    end
  end
end
