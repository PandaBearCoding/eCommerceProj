class UsersController < ApplicationController
    # skip_before_action :authorized, only: [:create]
 
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
        if user.valid?
            render json: user
        else
            render json: {error: "Failed To Create User"}
        end
      end

    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
      end

    # def create
    #     user = User.create!(user_params)
    #     if user.valid?
    #         @token = encode_token(user_id: user.id)
    #         render json: { user: UserSerializer.new(user), jwt: @token }, status: :created
    #     else
    #         render json: { error: "Failed To Create User" }, status: :not_acceptable
    #     end
    # end

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

    private 
    def user_params
        params.require(:user).permit(:username, :name, :profile_picture, :phone_number, :email, :address, :cc_number, :cc_date, :cc_cvv, :password_digest)
    end
end