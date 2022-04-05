class Buyer < ApplicationRecord
  belongs_to :seller
  serialize :desired_categories, Array



#   -- SELECT buyers.name, max_price, desired_categories, s.email, buyers.seller_id, price, description
# -- FROM buyers
# -- INNER JOIN sellers AS s ON s.id = buyers.seller_id
# -- INNER JOIN products AS p ON p.seller_id = buyers.seller_id AND p.price < buyers.max_price 
# -- WHERE buyers.id = 1


def self.my_products(id, desired_categories)
  select('buyers.name, max_price, desired_categories, s.email, s.name, buyers.seller_id, price, description, category, p.id')
  .joins("INNER JOIN sellers AS s ON s.id = buyers.seller_id
   INNER JOIN products AS p ON p.seller_id = buyers.seller_id AND p.price < buyers.max_price ")
  .where("buyers.id = ?", id)
end


  #instance
#   def my_products
#     # self here refers to the the instance (1) thing of the class
#   {id:self.id, desired_categories:self.desired_categories, method_type:'instance'}
# end
end