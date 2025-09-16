class Message < ApplicationRecord

  belongs_to :conversation

  validates :text, presence: true, length: {minimum: 2, maximum: 1000}
  validates :sender, inclusion: { in: %w[USER BOT], message: "%{value} is not a valid sender" }
end
