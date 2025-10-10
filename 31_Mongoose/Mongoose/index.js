const mongoose = require('mongoose');

mongoose.set('strictQuery', true);                      // Supresses strictQuery warning message
mongoose.connect('mongodb://127.0.0.1:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })  // Must use port 27017
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("ERROR OCURRED!")
        console.log(err)
    })

// {
//     title: 'Amadeus',
//     year: 1986,
//     score: 9.2,
//     rating: 'R'
// }

// Go to 31_Mongoose directory and Use below to start server
// node -i -e "$(< index.js)"

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema);
// const amadeus = new Movie({
//     title: 'Amadeus',
//     year: 1986,
//     score: 9.2,
//     rating: 'R'
// })

// // Inserts an array of movies
// Movie.insertMany([
//     {title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
//     {title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
//     {title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'},
//     {title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
//     {title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'}
// ])
//     .then(data => {
//         console.log("Movies Successfully Inserted!")
//         console.log(data);
//     })

