class Api::VideosController < ApplicationController
  before_action :authenticate_user!
  before_action :set_video, only: [:show, :destroy, :update]
  
  def index
    render json: Video.all
  end

  def show
  render json: @video
  end

  def create
    video = current_user.video.new(video_params)
    if video.save
    render json: video
    else
    render json: video.errors, status: 422
    end
  end

  def update
      if @video.update(video_params)
        render json: @video
      else
        render json: @video.errors, status: 422
    end
  end

  def destroy
    @video.destroy
  end

  private
  def set_video
    @video = Video.find(params[:id])
  end

  def video_params
    params.require(:video).permit(:title, :duration, :genre, :description)
  end
end
