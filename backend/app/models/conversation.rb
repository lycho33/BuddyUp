class Conversation < ApplicationRecord
    has_many :messages
    
    has_many :users, through: :invites
    has_many :invites
end
