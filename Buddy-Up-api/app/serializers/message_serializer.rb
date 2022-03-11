class MessageSerializer < ActiveModel::Serializer
  attributes :id, :test
  has_one :conversation
  has_one :user
end
