class MoviesController < ApplicationController
    
    def index
        render :json => Movie.all, :include => :review
    end

end
