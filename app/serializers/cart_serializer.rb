class CartSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :product_id
  
    has_one :user
    has_one :product
  end