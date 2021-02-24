class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :name, :profile_picture, :phone_number, :email, :address, :cc_number, :cc_date, :cc_cvv, :password_digest, :carted_items, :favorited_items
    
    has_many :carts
    has_many :favorites
  end