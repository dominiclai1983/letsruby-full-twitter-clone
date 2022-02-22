class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def signup
    render 'signup'
  end

  def login
    render 'login'
  end
end
