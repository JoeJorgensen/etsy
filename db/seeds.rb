# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Seller.destroy_all
Buyer.destroy_all
Product.destroy_all


u1 = User.create(email:'test1@test.com', password:123456)
u2 = User.create(email:'test2@test.com', password:123456)

# a hard coded array of strings(categories)
desired_categories = [
  'Artwork',
  'Birthday',
  'Wedding',
  'Jewlery',
  'Clothing',
  'Accessory',
]

s1 = Seller.create(name:'Sarah', email:'ArtBySarah@test.com' )
s2 = Seller.create(name:'Bryan', email:'PartyProducts@test.com' )
s3 = Seller.create(name:'Karl', email: 'JewelryByKarl@test.com')
s4 = Seller.create(name:'Anna', email: 'ClothingByAnna@test.com')


 Product.create(price:10000, description:'Painting', category: 'Artwork',seller_id:s1.id )
 Product.create(price:50, description:'Prints', category: 'Artwork',seller_id:s1.id )
 Product.create(price:15, description:'Invitations', category: 'Birthday',seller_id:s1.id )


 Product.create(price:50, description:'Banners', category: 'Birthday',seller_id:s2.id )
 Product.create(price:5, description:'Decor', category: 'Birthday',seller_id:s2.id )
 Product.create(price:8, description:'Decor', category: 'Wedding',seller_id:s2.id )

 Product.create(price:150, description:'Watch', category: 'Jewlery',seller_id:s3.id )
 Product.create(price:60, description:'Chain', category: 'Jewlery',seller_id:s3.id )
 Product.create(price:30, description:'Ring', category: 'Jewlery',seller_id:s3.id )

 Product.create(price:80, description:'Jacket', category: 'Clothing',seller_id:s4.id )
 Product.create(price:30, description:'T-shirt', category: 'Clothing',seller_id:s4.id )
 Product.create(price:25, description:'Hat', category: 'Accessory',seller_id:s4.id )








num_desired_categories = 2

Buyer.create(name:'Brenda', max_price:1000, desired_categories:desired_categories.sample(num_desired_categories), seller_id:s1.id )
Buyer.create(name:'Joe', max_price:10000, desired_categories: desired_categories.sample(num_desired_categories), seller_id:s2.id)
Buyer.create(name:'Katherine', max_price:7000, desired_categories: desired_categories.sample(num_desired_categories), seller_id:s3.id)



