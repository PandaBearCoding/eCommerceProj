class User < ApplicationRecord
    has_many :carts
    has_many :products, through: :carts
    
    has_many :favorites
    has_many :products, through: :favorites
end
