const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
                                             user_name: {
                                                 type     : String,
                                                 required : [true,
                                                             'This movie and review must have a user\'s name.'],
                                                 minlength: [3,
                                                             'The user name for this movie and review must be at least three (3) characters long']
                                             },
                                             rating   : {
                                                 type    : Number,
                                                 required: [true, 'This movie must have a rating'],
                                                 min     : [1, 'The minimum rating for a movie is one (1) star'],
                                                 max     : [5, 'The maximum rating for a movie is five (5) stars']
                                             },
                                             review   : {
                                                 type     : String,
                                                 required : [true, 'This movie must have a review.'],
                                                 minlength: [3,
                                                             'The review must be at least three (3) characters long']
                                             },
                                         });
const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;

const MovieSchema = new mongoose.Schema({
                                            title  : {
                                                type     : String,
                                                required : [true, 'This movie must have a title.'],
                                                minlength: [3, 'The title must be at least three (3) characters long']
                                            },
                                            reviews: [{type: ReviewSchema}],
    
                                        }, {timestamps: true});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;