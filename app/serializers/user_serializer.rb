class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :password, :name, :profile_picture, :phone_number, :email, :address, :cc_number, :cc_date, :cc_cvv, :carted_items, :favorited_items
    
    has_many :carts
    has_many :favorites
  end