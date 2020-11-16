class ItemsController < ApplicationController
  include ItemsHelper
  def index
    @items = Item.all
  end

  def show
    @item = Item.find(params[:id])
  end

  def new 
    @item = Item.new
  end

  def create 
    @item = Item.new(item_params)
    @item.save
    redirect_to item_path(@item)
  end
end
