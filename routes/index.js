const express = require('express');
const router = express.Router();
const Movie = require('./movieApp/models/Movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//adds a movie to the database
router.post('/addMovie', (req, res) => {
  if(!req.body.title || !req.body.rating || !req.body.synopsis || !req.body.releaseYear || !req.body.genre || !req.body.director || !req.body.boxOffice){
      return res.status(400).json({message:'All fields must be filled'});
  };
  Movie.findOne({title: req.body.title})
  .then(title => {
      if(title){
        return res.status(500).json({message:'Movie is already in database'});
      }
      const newMovie = new Movie();
      newMovie.title = req.body.title;
      newMovie.rating = req.body.rating;
      newMovie.synopsis = req.body.synopsis;
      newMovie.releaseYear = req.body.releaseYear;
      newMovie.genre = req.body.genre;
      newMovie.director = req.body.director;
      newMovie.boxOffice = req.body.boxOffice;
      newMovie.save()
      .then((title) => {
          return res.status(200).json({message: 'Movie added', title: title});
      })
      .catch(err => {
          return res.status(500).json({message: 'Movie was not added', err});
      })
  })
  .catch(err => {
      return res.status(500).json({message:'Server error', err});
  })
});

module.exports = router;
