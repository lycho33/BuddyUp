class Message < ApplicationRecord
  belongs_to :conversation
  belongs_to :sender, class_name: :User, foreign_key: 'user_id'

  after_create_commit { MessageBroadcastJob.perform_later(self) }
end
