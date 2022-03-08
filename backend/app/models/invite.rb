class Invite < ApplicationRecord
  has_and_belongs_to_many :users
  belongs_to :conversation
end