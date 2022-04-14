class WordBankSerializer < ActiveModel::Serializer
  attributes :id, :word, :definition, :synonyms, :image, :sampleSentence
  has_one :user
end
