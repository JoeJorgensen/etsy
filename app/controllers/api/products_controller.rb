class Api::ProductsController < ApplicationController

    def index
        render json: Product.available
    end

    def category_cost
        render json: Product.category_cost
    end
end
