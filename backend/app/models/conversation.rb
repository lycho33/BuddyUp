class Conversation < ApplicationRecord
    has_many :messages
    # has_many :users, through: :invites
    has_many :invites

    def accepted_users
        User.joins(:invites).where("invites.conversation_id = ? and invites.join_request = true", self.id)
    end
end
