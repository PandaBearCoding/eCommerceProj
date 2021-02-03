class Product < ApplicationRecord
    has_many :carts
    has_many :users, through: :carts

    has_many :favorites
    has_many :users, through: :favorites
end
