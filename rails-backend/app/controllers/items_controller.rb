class ItemsController < ApplicationController
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
    @item = Item.new(params[:item])
    @item.save
    redirect_to item_path(@item)
  end
end
