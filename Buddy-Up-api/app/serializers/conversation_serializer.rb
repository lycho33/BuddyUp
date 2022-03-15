class ConversationSerializer < ActiveModel::Serializer
  attributes :title
  has_one :user
end
