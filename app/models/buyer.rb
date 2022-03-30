class Buyer < ApplicationRecord
  belongs_to :seller
  serialize :desired_categories, Array
end
