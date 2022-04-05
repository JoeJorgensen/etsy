class Api::SellersController < ApplicationController
  def index
    render json: Seller.all
  end

  def show
    seller = Seller.find(params[:id])
    render json: seller.buyers
  end
end
