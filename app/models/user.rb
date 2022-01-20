class User < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :address, presence: true
    validates :email, presence: true, uniqueness:
    true
end
