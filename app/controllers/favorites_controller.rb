class FavoritesController < ApplicationController
    def index
        favorites = Favorite.all
        render json: favorites   
    end

    # do we need a show method if we could just link to the product's show page?

    def update
        favorite = Favorite.find(params[:id])
        favorite.update!(favorite_params)
        render json: {}
    end 

    def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        render json: {}
    end 

    private
    def favorite_params
        params.require(:favorite).permit(:user_id, :product_id)
    end
end

  