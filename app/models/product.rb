class Product < ApplicationRecord
  belongs_to :seller

  def self.available
    select('products.id, price, description, category, seller_id')
    .from ("products")
    .joins ('INNER JOIN sellers AS s 
    ON products.seller_id = s.id')
    end
end

