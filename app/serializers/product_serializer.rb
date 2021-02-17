class ProductSerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :price, :image
    
    has_many :carts
    has_many :favorites
  end