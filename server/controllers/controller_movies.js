const Movie = require('../models/model_movie');

module.exports = {
    
    movies: function (request, response) {
        
        Movie.find({}, (error, movies) => {
            if (error) {
                response.json({'message': 'error', 'error': ['Couldn\'t Movie.find()']});
            }
            else {
                response.json({'message': 'success finding all movies', 'data': movies});
            }
        });
    },
    
    movie: function (request, response) {
        id = request.params.id;
        Movie.findById(id, (error, movie) => {
            if (error) {
                response.json({'error': error});
            }
            else {
                response.json({'message': 'success finding single movie', 'data': movie});
            }
        });
    },
    
    movie_create: (request, response) => {
        movie = new Movie();
        // request.body contains the movies passed in from createMovies in http.service.ts
        movie.title = request.body.title;
        movie['user_name'] = request.body.user_name;
        movie.reviews['rating'] = request.body.rating;
        movie.reviews['review'] = request.body.review;
        movie.save((error) => {
            if (error) {
                response.json({'error': error});
            }
            else {
                response.json({'success': 'success saving'});
            }
        });
    },
    
    movie_review: (request, response) => {
        id = request.params.id;
        Movie.findByID(id, (error, movie) => {
            // THIS IS WHERE WE UPDATE THE MOVIE IN ORDER TO SAVE NEW USER AND REVIEWS
        })
        
    }
    
};
