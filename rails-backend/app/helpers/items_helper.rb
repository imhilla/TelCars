module ItemsHelper
  def item_params
    params.require(:item).permit(:title, :body, :objectives, :services, :image)
  end
end
