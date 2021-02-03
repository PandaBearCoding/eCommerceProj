class UsersController < ApplicationController
    # to be able to view and interact with other members?
    def index
        users = User.all
        render json: users
    end 

    def show
        user = User.find(params[:id])
        render json: user, except: [:created_at, :updated_at]
    end

    def create
        user = User.create!(user_params)
        render json: user
    end 

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user
    end 

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: {}
    end 

    # list of products the user favorited 
    # def favorite_products
    #     user = User.find(params[:id])
    #     favorites = user.favorites
    #     render json: favorites
    # end

    # list of products the user put in their cart
    # def cart_products
    #     user = User.find(params[:id])
    #     carts = user.carts
    #     render json: carts
    # end 

    # will need login/logout actions for Auth

    private 
    def user_params
        params.require(:user).permit(:username, :password, :name, :profile_picture, :phone_number, :email, :address, :cc_number, :cc_date, :cc_cvv)
    end
end