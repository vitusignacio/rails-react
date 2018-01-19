class HomeController < ApplicationController
  def index
  end
  
  def shopping_items
    render json: ['meat', 'pork', 'vegetables', 'sauces']
  end
end
