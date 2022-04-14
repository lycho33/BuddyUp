class WordBank < ApplicationRecord
  has_one :user, through: :messages
end
