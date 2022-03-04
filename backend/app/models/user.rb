class User < ApplicationRecord
    has_many :conversations
    has_many :messages

    attr_accessor :remember_token
    has_secure_password
    # before_save { self.email = email.downcase }

    validates :username, presence: true
    validates :username, uniqueness: { case_sensitive: false }
    
    # VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    # validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
    # validates :password, presence: true, length: { minimum: 4 }

    class << self
        # Return the hash value of the given string
        def digest(string)
            cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST : BCrypt::Engine.cost
            BCrypt::Password.create(string, cost: cost)
        end
  
        # Return a random token
        def generate_token
            SecureRandom.urlsafe_base64
        end
    end

    # Create a new token -> encrypt it -> stores the hash value in remember_digest in DB.
    def remember
        self.remember_token = User.generate_token
        update_attribute(:remember_digest, User.digest(remember_token))
    end

    
    # Check if the given value matches the one stored in DB
    def authenticated?(remember_token)
        BCrypt::Password.new(remember_digest).is_password?(remember_token)
    end

    def forget
        update_attribute(:remember_digest, nil)
    end
end
