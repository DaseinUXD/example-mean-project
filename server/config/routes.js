const controller_movies = require('../controllers/controller_movies'),
    path = require('path');

//routes are first checked here in express

module.exports = (app) => {
    app.get('/movies', controller_movies.movies);
    app.get('/movies/:id', controller_movies.movie);
    app.post('/movies', controller_movies.movie_create);
    app.patch('/movies/:id/review', controller_movies.movie_review);


    // if no Express routes match, go to Angular
    app.all('*', (request, response) => {
        response.sendFile(path.resolve('./public/dist/public/index.html'))
    });

};