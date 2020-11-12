class StaticController < ApplicationController
  def home
    render json: { status: 'it renders okay'}
  end
end