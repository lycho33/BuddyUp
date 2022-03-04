class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id
  has_many :messages
end
