class Api::BuyersController < ApplicationController
  #class
  def show
    buyer = Buyer.find(params[:id])
    render json: Buyer.my_products(buyer.id, buyer.desired_categories)
  end

  # #instance
  # def show2
  #   buyer = Buyer.find(params[:id])
  # render json: buyer.my_products
  # end
end
