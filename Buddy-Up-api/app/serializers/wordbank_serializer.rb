class WordbankSerializer < ActiveModel::Serializer
  attributes :id, :word, :definition, :synonyms, :image_url, :sentence
  has_one :user
end
