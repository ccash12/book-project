class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :img_url, :product_type, :qty
end
