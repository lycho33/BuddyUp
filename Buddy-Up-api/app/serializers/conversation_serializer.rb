class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :title, :joins_request
  has_one :user
end
