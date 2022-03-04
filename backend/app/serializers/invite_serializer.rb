class InviteSerializer < ActiveModel::Serializer
  attributes :id, :join_request
  has_one :user
  has_one :conversation
end
