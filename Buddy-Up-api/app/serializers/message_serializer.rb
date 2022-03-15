class MessageSerializer < ActiveModel::Serializer
  attributes :id, :text
  has_one :conversation
  has_one :user
end
