class User < ApplicationRecord
    # has_secure_password
    validates :username, uniqueness: { case_sensitive: false }

    has_many :carts, dependent: :destroy 
    has_many :products, through: :carts, dependent: :destroy 
    
    has_many :favorites, dependent: :destroy 
    has_many :products, through: :favorites, dependent: :destroy 
 

    # to be able to display information from the join tables, we need instance methods

    def carted_items
        User.first.carts.map {|cart| cart.product}
    end

    def favorited_items
        User.first.favorites.map {|favorite| favorite.product}
    end
end
