class Product < ApplicationRecord
  belongs_to :seller

  def self.available
    select('products.id, price, description, category, seller_id, s.name, s.email')
    .from('products')
    .joins('INNER JOIN sellers AS s 
    ON products.seller_id = s.id')
  end


    def self.category_cost
      select("DISTINCT category, STRING_AGG(CAST(price AS VARCHAR), ',') as prices, 
      COUNT(*) price_count" )
     .group(' category')

    end
end

