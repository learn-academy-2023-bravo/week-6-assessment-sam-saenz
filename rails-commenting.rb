# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is declaring the controller class, which has all of the instructions for accessing routes in our application.
class BlogPostsController < ApplicationController
  def index
    # ---2) This is defining the attribute @posts to be what is returned from the query BlogPost.all, which will be each blog post item
    @posts = BlogPost.all
  end

  # ---3) This is defining what will happen in the show route, in this case it finds a specific post based on a passed parameter, the post's id.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This defines the new route, which will begin a new entry form for creating a blog post
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This will actually create the new blog post, using the parameters entered into the new form, it then checks if the created post was valid, and if so goes to the path for the new post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This begins an editing form for a blog post
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This will update the given post with the parameters passed from the entry form. If the new values are valid, it will bring you to the path of the updated post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This will return you to the path with all blog posts after a post is deleted successfully.
      redirect_to blog_posts_path
    end
  end

  # ---9) This declares the params method as private, which means that they cannot be accessed from outside of their class. 
  private
  def blog_post_params
    # ---10) These params are defined whenever a controller instance is created, they ensure that correct parameters are used. .require means that a :blog_post param is required, whereas .permit means that :title and :content are optional params that are still capable of being recognized.
    params.require(:blog_post).permit(:title, :content)
  end
end
