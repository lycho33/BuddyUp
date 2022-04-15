class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :wordbank
end