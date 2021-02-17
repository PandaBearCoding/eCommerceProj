class User < ApplicationRecord
    has_many :carts
    has_many :products, through: :carts
    
    has_many :favorites
    has_many :products, through: :favorites

    # to be able to display information from the join tables, we need instance methods

    def carted_items
        User.first.carts.map {|cart| cart.product}
    end

    def favorited_items
        User.first.favorites.map {|favorite| favorite.product}
    end
end
