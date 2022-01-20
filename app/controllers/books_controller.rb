class BooksController < ApplicationController
    skip_before_action :authorize

    def index
        products = Book.all
        render json: products
    end

    def show
        product = Book.find_by(id: params[:id])
        render json: product
    end
end
