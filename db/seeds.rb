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
  'artwork',
  'birthday',
  'wedding',
]

s1 = Seller.create(name:'Art by Sarah', email:'Sarah@test.com' )
s2 = Seller.create(name:'Party Products', email:'PartyProduct@test.com' )

p1 = Product.create(price:1000, description:'painting', category: 'artwork',seller_id:s1.id )
p2 = Product.create(price:50, description:'prints', category: 'artwork',seller_id:s1.id )
p3 = Product.create(price:10, description:'invitations', category: 'birthday',seller_id:s2.id )
p3 = Product.create(price:15, description:'banners', category: 'birthday',seller_id:s2.id )
p3 = Product.create(price:10, description:'balloons', category: 'birthday',seller_id:s2.id )
p3 = Product.create(price:10, description:'table signs', category: 'wedding',seller_id:s2.id )

num_desired_categories = 2

Buyer.create(name:'Brenda', max_price:1000, desired_categories:desired_categories.sample(num_desired_categories), seller_id:s1.id )
Buyer.create(name:'Joe', max_price:10000, desired_categories: desired_categories.sample(num_desired_categories), seller_id:s1.id)
Buyer.create(name:'Katherine', max_price:7000, desired_categories: desired_categories.sample(num_desired_categories), seller_id:s2.id)



