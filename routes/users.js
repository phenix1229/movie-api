const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// <% if(movies){ for(movie in movies){%>
//   <h2><%= `${movie.title}` %></h2>
  
// <% }} %>
// <p><%= `RATING: ${movie.rating.toUpperCase()}` %> </p>
//         <p><%= `SYNOPSIS: ${movie.synopsis.toUpperCase()}` %> </p>
//         <p><%= `RELEASE YEAR: ${movie.releaseYear}` %> </p>
//         <p><%= `GENRE: ${movie.genre.toUpperCase()}` %> </p>
//         <p><%= `DIRECTOR: ${movie.director.toUpperCase()}` %> </p>
//         <p><%= `BOX OFFICE: ${movie.boxOffice}` %> </p>