const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title:{type:String, default:'', lowercase:true},
    rating:{type:String, default:'', lowercase:true},
    synopsis:{type:String, unique:true, default:'', lowercase:true},
    releaseYear:{type:String, default:'', lowercase:true},
    genre:{type:String, default:'', lowercase:true},
    director:{type:String, default:'', lowercase:true},
    boxOffice:{type:String, default:'', lowercase:true},
});

module.exports = mongoose.model('movies', movieSchema);