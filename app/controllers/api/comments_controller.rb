class Api::CommentsController < ApplicationController
  def index
    render json: Comment.all
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
