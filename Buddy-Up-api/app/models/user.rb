class User < ApplicationRecord
    has_secure_password

    has_many :messages
    has_many :conversations, through: :messages
    has_many :wordbank
    # user - messages - wordbank
end
