class User < ApplicationRecord
    has_secure_password
    before_save { self.email = email.downcase }

    validates :username, presence: true
    validates :username, uniqueness: { case_sensitive: false }
    
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
    validates :password, presence: true, length: { minimum: 4 }
end
