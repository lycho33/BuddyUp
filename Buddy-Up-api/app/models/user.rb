class User < ApplicationRecord
    has_secure_password

    has_many :messages
    has_many :conversations, through: :messages
    has_one :wordbank
    # user - messages - wordbank
end
