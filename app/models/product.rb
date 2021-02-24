class Product < ApplicationRecord
    has_many :carts
    has_many :users, through: :carts

    has_many :favorites, dependent: :destroy 
    has_many :users, through: :favorites, dependent: :destroy 
end
